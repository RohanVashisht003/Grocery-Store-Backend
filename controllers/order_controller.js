// using product model
const Product = require('../models/product');
// using order model
const Order = require('../models/order');
// using customer model
const Customer = require('../models/customer');


// for creating new order
module.exports.createOrder = async (req, res) => {
    try {
        // check for correct input
        if (req.body.email || req.body.phone) {
            if (req.body.item || req.body.paymentInfo) {
                // find customer if exists
                let customer = await Customer.findOne({
                    $or: [{
                        email: req.body.email
                    }, {
                        phone: req.body.phone
                    }]
                });
                // if customer exist then proceed
                if (customer) {
                    let newOrder, totalPrice = 0;
                    // create new order
                    newOrder = await Order.create({
                        paymentInfo: req.body.paymentInfo,
                    });
                    //  if there is only one item to order
                    let itemArr = Array.isArray(req.body.item) ? req.body.item : [req.body.item];
                    console.log(itemArr)
                    // iterate over item array
                    for (let i = 0; i < itemArr.length; i++) {
                        // find product
                        let product = await Product.findOne({
                            info: itemArr[i]
                        });
                        console.log(product);
                        // if product exist
                        if (product) {
                            // add price in total
                            totalPrice += product.price
                            console.log(totalPrice);
                            // push product to productlist on each iteration
                            newOrder.productList.push(product);
                            // save after updating
                            await newOrder.save();
                        }
                    }
                    // set total price of order
                    newOrder.totalPrice = totalPrice;
                    // save after updating
                    await newOrder.save();
                    // push order to customer orders list
                    customer.orders.push(newOrder);
                    // save after updating
                    await customer.save();

                    // is everything goes right then return response
                    return res.status(200).json({
                        message: 'Order Placed Successfully',
                        orderPlaced: newOrder
                    })

                } else {
                    return res.status(400).json({
                        message: 'Customer not found, Enter correct details'
                    })
                }
            } else {
                return res.status(400).json({
                    message: "Please enter product details for ordering"
                })
            }
        } else {
            return res.status(400).json({
                message: "Please enter either phone or email of customer"
            })
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}