const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller');

// customer create
router.post('/new',orderController.createOrder);

module.exports= router;