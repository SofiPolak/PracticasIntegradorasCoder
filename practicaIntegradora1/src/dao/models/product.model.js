import mongoose from "mongoose";

const productCollection = "Productos"

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true, max: 100 },
    code: { type: String, required: true, max: 100 },
    stock: { type: Number, required: true },
    status: { type: Boolean, required: true, default: true },
    category: { type: String, required: true, max: 100 }
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel