const mongoose = require('mongoose');

// schema for product
const productSchema = new mongoose.Schema({
    // category of product
    category: {
        type: 'String',
        enum: ['Dairy', 'Vegetables', 'Poultry', 'Pharma'],
        required: true,
    },
    // name/info of product
    info: {
        type: 'String',
        unique: true,
        required: true
    },
    // price of product
    price: {
        type: Number,
        required: true,
    },
    // quantity of product
    quantity: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;