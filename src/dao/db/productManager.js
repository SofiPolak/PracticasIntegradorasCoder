import productModel from "../models/product.model.js";

class ProductManager {

    async addProduct(title, description, price, thumbnail, code, stock, category) {
        try{
        let result = await productModel.create({ title, description, price, thumbnail, code, stock, category })
        return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(idBuscado) {

        try {
            let result = await productModel.findOne(idBuscado);
            return result;
        } catch (error) {
            console.log(error);
        }

    }

    async checkProducts() {

        try {
            let products = await productModel.find()
            return products;
        } catch (error) {
            console.log(error)
        }
    }


    async updateProduct(id, productUpdate) {
        try{
        let result = await productModel.updateOne({ _id: id }, productUpdate);
        return result;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try{
        let result = await productModel.deleteOne({ _id: id });
        return result;
        } catch (error) {
            console.log(error);
        }
    }

}

export default ProductManager;