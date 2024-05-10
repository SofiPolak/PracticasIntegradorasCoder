import mongoose from "mongoose";

const messageCollection = "Mensajes"

const messageSchema = new mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    apellido: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 50 }
})

const messageModel = mongoose.model(messageCollection, messageSchema)

export default messageModel