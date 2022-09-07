const mongoose = require('mongoose');

// schema for customer
const customerSchema = new mongoose.Schema({

    // name of customer
    name: {
        type: String,
        required: true,
    },

    // email of customer
    email: {
        type: String,
        required: true,
        unique: true
    },
    // phone number of customer
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    // list of orders
    orders: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Order'
    }]
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;