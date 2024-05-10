import mongoose from "mongoose";

const productCollection = "Productos"

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    apellido: { type: String, required: true, max: 100 }
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel