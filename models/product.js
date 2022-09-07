const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category:{
        type:'String',
        enum:['Dairy','Vegetables','Poultry','Pharma'],
        required:true,
    },
    info:{
       type:'String',
       unique:true ,
       required:true
    },
    price:{
        type: Number,
        required:true,
    },
    quantity:{
        type: Number ,
        required:true,
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
