import { Router } from "express";
import CartManager from "../dao/db/cartManager.js";
const cartManager = new CartManager();
const router = Router();

router.get('/', async (req, res) => {
    const result = await cartManager.checkCarts();
    res.send({ result: "success", payload: result })
})

router.get('/:cid', async (req, res) => {
    let { cid } = req.params;
    const result = await cartManager.getCartById(cid);
    res.send({ result: "success", payload: result })
})

router.post('/', async (req, res) => {
    const result = await cartManager.addCart();
    res.send({ result: "success", payload: result });
})

/* //Este metodo no se usa
router.put('/:cid', async (req, res) => {
    let { cid } = req.params
    let cartToReplace = req.body
    const result = await cartManager.updateCart(cid,cartToReplace);
    res.send({ result: "success", payload: result });
})*/

router.delete('/:cid', async (req, res) => {
    let { cid } = req.params
    const result = await cartManager.deleteCart(cid);
    res.send({ result: "success", payload: result });
})

router.post("/:cid/product/:pid", async (req, res) => {

        let cid = req.params.cid;
        let pid = req.params.pid;
        const result = await cartManager.updateCart(cid,pid);
        res.send({ result: "success", payload: result });
    
})

export default router;