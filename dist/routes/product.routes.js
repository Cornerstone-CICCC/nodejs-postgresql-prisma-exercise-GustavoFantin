"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', product_controller_1.default.getAllProducts);
productRouter.get('/:id', product_controller_1.default.getProductById);
productRouter.put('/:id', product_controller_1.default.updateProductById);
productRouter.delete('/:id', product_controller_1.default.deleteProductById);
productRouter.post('/', product_controller_1.default.addProduct);
exports.default = productRouter;
