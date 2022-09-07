const express = require('express');
const router = express.Router();
// using product controller
const productController = require('../controllers/product_controller');

// product create
router.post('/add', productController.add);
// product price update
router.post('/update', productController.update);

module.exports = router;