const express = require('express');
// using express router
const router = express.Router();

// route for customer
router.use('/customer',require('./customer'));

// for order
router.use('/order',require('./order'));

// // for product
router.use('/product',require('./product'));


module.exports = router;