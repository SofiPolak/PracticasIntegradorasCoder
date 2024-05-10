import express from 'express'
import mongoose from 'mongoose'
//import cartRouter from './routes/carts.router.js'
//import messageRouter from './routes/messages.router.js'
import productRouter from './routes/products.router.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB)
    .then(() => { console.log("Conectado a la base de datos") })
    .catch(error => console.error("Error en la conexion", error))

//app.use('/api/carts', cartRouter)
//app.use('/api/messages', messageRouter)
app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})