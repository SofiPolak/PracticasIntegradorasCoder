import mongoose from "mongoose";

const cartCollection = "Carritos"

const cartSchema = new mongoose.Schema({
    products: [
        {
          id: {type: String},
          quantity: {type: Number},
        },
      ]
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel