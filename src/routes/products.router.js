import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        let products = await productModel.find()
        res.send({ result: "success", payload: products })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    let { nombre, apellido } = req.body
    if (!nombre || !apellido) {
        res.send({ status: "error", error: "Faltan parametros" })
    }
    let result = await productModel.create({ nombre, apellido })
    res.send({ result: "success", payload: result })
})

router.put('/:pid', async (req, res) => {
    let { pid } = req.params

    let productToReplace = req.body

    if (!productToReplace.nombre || !productToReplace.apellido) {
        res.send({ status: "error", error: "Parametros no definidos" })
    }
    let result = await productModel.updateOne({ _id: pid }, productToReplace)

    res.send({ result: "success", payload: result })
})

router.delete('/:pid', async (req, res) => {
    let { pid } = req.params
    let result = await userModel.deleteOne({ _id: pid })
    res.send({ result: "success", payload: result })
})


export default router;