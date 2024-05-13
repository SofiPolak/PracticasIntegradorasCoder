import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {
  res.render('chat', {})
})

export default router;

/*import { Router } from "express";
import messageModel from "../dao/models/message.model.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        let messages = await messageModel.find()
        res.send({ result: "success", payload: messages })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    let { user, message } = req.body
    if (!user || !message) {
        res.send({ status: "error", error: "Faltan parametros" })
    }
    let result = await messageModel.create({ user, message })
    res.send({ result: "success", payload: result })
})

router.put('/:mid', async (req, res) => {
    let { mid } = req.params

    let messageToReplace = req.body

    if (!messageToReplace.user || !messageToReplace.message) {
        res.send({ status: "error", error: "Parametros no definidos" })
    }
    let result = await messageModel.updateOne({ _id: mid }, messageToReplace)

    res.send({ result: "success", payload: result })
})

router.delete('/:mid', async (req, res) => {
    let { mid } = req.params
    let result = await messageModel.deleteOne({ _id: mid })
    res.send({ result: "success", payload: result })
})


export default router;*/