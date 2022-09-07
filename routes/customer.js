const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer_controller');

// customer create
router.post('/create',customerController.create);
router.get('/list',customerController.list);
router.get('/orderlist',customerController.orderList);
router.get('/max',customerController.maxOrder);

module.exports= router;