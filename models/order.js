const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

// Individual product:
const productCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number,
});

const ProductCart = mongoose.model("ProductCart", productCartSchema);

//Entire Order Schema
const OrderSchema = new mongoose.Schema({
    products: [productCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    status: {
        type: String,
        default: "Received",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"]
    },
    updated: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true});

const Order = mongoose.model("Order", OrderSchema);
module.exports = {Order, ProductCart};