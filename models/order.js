const mongoose = require('mongoose');

// schema for orders
const orderSchema = new mongoose.Schema({
    // list of products
    productList: [{
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    }],
    // total price of order
    totalPrice: {
        type: Number,
    },
    // payment method used
    paymentInfo: {
        type: "String",
        enum: ["Upi", "Cash", "Internet-Banking"]
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;