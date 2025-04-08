import { Router, } from 'express'
import productController from '../controllers/product.controller'

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.put('/:id', productController.updateProductById)
productRouter.delete('/:id', productController.deleteProductById)
productRouter.post('/', productController.addProduct)

export default productRouter