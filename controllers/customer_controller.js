// using customer model
const Customer = require('../models/customer');


// creating Customer
module.exports.create = async (req, res) => {
    try {
        // checking if data is entered correctly
        if (!req.body.name || !req.body.email || !req.body.phone) {
            return res.status(400).json({
                message: "Please enter correct data"
            })
        }
        // find customer either from phone or email
        let customer = await Customer.findOne({
            $or: [{
                email: req.body.email
            }, {
                phone: req.body.phone
            }]
        });
        // if customer already exist
        if (customer) {
            return res.status(400).send({
                message: 'Customer already exists'
            });
        }
        // else create new customer
        let newCustomer = await Customer.create(req.body);
        return res.status(201).json({
            message: 'Customer created successfully',
            newCustomer
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
};

// show customer list
module.exports.list = async (req, res) => {
    try {
        // find and populate all customers
        let customers = await Customer.find({}).sort('-createdAt').populate({
            path: 'orders',
            populate: {
                path: 'productList'
            }
        })
        // if there is no customer in db
        if (customers.length == 0) {
            return res.status(400).json({
                message: "No customer(s) exist"
            })
        }
        // else
        return res.status(200).json({
            message: "Customers List",
            listOfCustomers: customers
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// fetch specific customer 
module.exports.orderList = async (req, res) => {
    try {
        // checking if data is entered correctly
        if (req.body.email || req.body.phone) {
            // find customer with either phone or email
            let customer = await Customer.findOne({
                $or: [{
                    email: req.body.email
                }, {
                    phone: req.body.phone
                }]
            }).populate({
                path: 'orders',
                populate: {
                    path: 'productList'
                }
            });

            // return list of orders
            return res.status(200).json({
                message: `Order list for ${customer.name}(${customer.phone})`,
                OrderList: customer.orders
            })
        } else {
            return res.status(400).json({
                message: "Please enter correct data"
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// find customer with max orders
module.exports.maxOrder = async (req, res) => {
    try {
        // find customer and populate
        let customers = await Customer.find({}).populate({
            path: 'orders',
            populate: {
                path: 'productList'
            }
        });
        // if not customer found
        if (customers.length == 0) {
            return res.status(200).json({
                message: 'No Details',
            })
        }

        let customer, max = 0;
        // iterate over customers array
        customers.forEach((item) => {
            // find customers having maximum orders
            if (item.orders.length > max && item.orders.length > 0) {
                max = item.orders.length;
                customer = item;
            }
        });
        // return success response
        return res.status(200).json({
            message: 'Details of customer having max orders',
            details: customer
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}