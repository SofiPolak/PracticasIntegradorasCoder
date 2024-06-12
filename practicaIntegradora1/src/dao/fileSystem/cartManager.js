import { promises as fs } from 'fs';

class CartManager {

    static cartIdCount = 0;

    constructor() {
        this.carts = [],
            this.path = 'Carts.json'
    }

    async addCart() {

        try {
            const cartId = ++CartManager.cartIdCount;

            const cart = {
                id: cartId,
                cartProducts: []
            }

            this.carts.push(cart);
            await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2));
            return cart;

        } catch (error) {
            console.error("Error al crear el carrito", error);
        }

    }

    async getCarts() {

        try {
            return await this.checkCarts();
        } catch (error) {
            console.error("Error al consultar carritos", error);
            return [];
        }
    }

    async getCartById(idBuscado) {

        try {
            const carts = await this.checkCarts();
            const cart = carts.find((c) => c.id === idBuscado);
            if (!cart) {
                console.log("No existe un carrito con ese Id.");
            } else {

                return cart.cartProducts;
            }
        } catch (error) {
            console.error("Error en busqueda de carrito con Id", error);
        }

    }

    async checkCarts() {

        try {
            const data = await fs.readFile(this.path, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            } else {
                throw error;
            }
        }
    }

    async updateCart(cid,pid) {

        try {
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
        }

    }

    async deleteCart(id) {

        try {
            const carts = await this.checkCarts();
            const newCarts = carts.filter(item => item.id != id);
            await fs.writeFile(this.path, JSON.stringify(newCarts, null, 2));

        } catch (error) {
            console.error("Error al eliminar el carrito", error);
        }

    }

}

export default CartManager;