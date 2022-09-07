const express = require('express');
const router = express.Router();
// using order controller
const orderController = require('../controllers/order_controller');

// order create
router.post('/new', orderController.createOrder);

module.exports = router;