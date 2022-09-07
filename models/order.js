const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productList:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Product"
        }
    ],
    totalPrice:{
        type: Number,
    },
    paymentInfo:{
        type: "String",
        enum: ["Upi", "Cash", "Internet-Banking"]
    }
}
,{timestamps:true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;