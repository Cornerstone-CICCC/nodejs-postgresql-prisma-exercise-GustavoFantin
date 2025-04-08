import { Request, Response } from "express";
import productModel
from "../models/product.model";
import { Product } from "@prisma/client";

//get all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.fetchAllProducts()
        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({ 
            message: "Server Error"
         })
    }
}

//get product by id
const getProductById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.fetchProductById(id)
        if(!product) {
            res.status(500).json({ message: 'Product not found!' })
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Unable to fetch employee' })
    }
}

//Update product by id
const updateProductById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { productName, price } = req.body
        const product = await productModel.editProductByid(id, {
            productName,
            price
        })
        if (!product) {
            res.status(500).json({
                message: "product does not exists."
            })
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: "Unable to update product."
        })
    }
}

//add new product
const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
    try {
        const { productName, price } = req.body
        const product = await productModel.createProduct({
            productName,
            price
        })
        if(!product) {
            res.status(404).json({
                message: "product not found!"
            })
        }
        res.status(201).json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Unable to add product"
        })
    }
}


//delete product by id
const deleteProductById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.removeProductById(id)
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Unable to delete product" })
    }
}

export default { 
    getAllProducts,
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById
}