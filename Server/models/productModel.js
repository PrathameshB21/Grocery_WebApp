import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productCategory: {
        type: Array,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productOfferPrice: {
        type: Number,
        required: true,
    },
    productDescription: {
        type: Array,
        required: true,
    },
    productImages: {
        type: Array,
        required: true,
    },
    prductInStock: {
        type: Boolean,
        default: true,

    }

}, { timestamps: true })

const productModel = mongoose.models.products || mongoose.model('products', productSchema);

export default productModel;