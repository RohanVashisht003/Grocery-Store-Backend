const express = require('express');
const router = express.Router();
// using customer controller
const customerController = require('../controllers/customer_controller');

// customer create
router.post('/create', customerController.create);
// get all customers
router.get('/list', customerController.list);
// get specific customer
router.get('/orderlist', customerController.orderList);
// get customer having max orders
router.get('/max', customerController.maxOrder);

// export router
module.exports = router;