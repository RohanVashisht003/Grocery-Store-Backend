const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');

// customer create
router.post('/add',productController.add);
router.post('/update',productController.update);

module.exports= router;