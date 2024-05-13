import cartModel from "../models/cart.model.js";

class CartManager {

    async addCart() {
        try{
        let result = await cartModel.create()
        return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getCartById(idBuscado) {

        try {
            let result = await cartModel.findOne(idBuscado);
            return result;
        } catch (error) {
            console.log(error);
        }

    }

    async checkCarts() {
        try {
            let carts = await cartModel.find()
            return carts;
        } catch (error) {
            console.log(error)
        }
    }

    async updateCart(cid,pid) {

//VER PID Y CART TO REPLACE

        /*try {
            const carts = await this.checkCarts();

            const cart = carts.find(c => c.id === cid);
            if (cart) {
                const cartProducts = cart.cartProducts;
                const productUpdate = cartProducts.find((p) => p.id === pid);

                if(productUpdate){
                    ++productUpdate.quantity;
                }else{
                    cartProducts.push({
                        "id":pid,
                        "quantity":0
                    })
                }
                
                const newCarts = carts.filter(item => item.id != cid);
                newCarts.push(cart);
                await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
                return cart;
            } else {
                console.log("No se encontro el carrito para actualizar");
            }

        } catch (error) {
            console.error("Error al actualizar el carrito", error);
        }*/
    
        /*if (!cartToReplace.products) {
            res.send({ status: "error", error: "Parametros no definidos" })
        }*/
        let result = await cartModel.updateOne({ _id: cid }, cartToReplace)
    
        res.send({ result: "success", payload: result })

    }

    async deleteCart(id) {
        let result = await cartModel.deleteOne({ _id: id })
        return result;
    }

}

export default CartManager;