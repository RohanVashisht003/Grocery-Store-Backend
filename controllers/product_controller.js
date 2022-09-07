// using product model
const Product = require('../models/product');


// add a new product
module.exports.add = async (req, res) => {
    try {
        // check for correct input
        if (!req.body.category || !req.body.price || !req.body.quantity || !req.body.info) {
            return res.status(400).json({
                message: "Please enter correct data"
            })
        }
        // find product
        let productFind = await Product.findOne({
            info: req.body.info
        });
        // if exist
        if (productFind) {
            return res.status(400).send({
                message: 'Product already exists, Enter new one'
            });
        }
        // if not exist create product
        let newProduct = await Product.create(req.body);
        return res.status(201).send({
            message: "Product added successfully",
            newProduct
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

// update product price 
module.exports.update = async (req, res) => {
    try {
        // if user not entering correct data
        if (!req.body.price || isNaN(req.body.price)) {
            return res.status(400).json({
                message: "Please enter correct data"
            })
        }
        // find and update price
        const modifiedProduct = await Product.updateOne({
            info: req.body.item
        }, {
            $set: {
                price: req.body.price
            }
        });
        // if product not found
        if (modifiedProduct.matchedCount == 0) {
            return res.status(401).json({
                message: 'Product Not found'
            })
        }
        // send response after updation
        return res.status(200).json({
            message: 'Price updated successfully',
            newPrice: req.body.price
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}