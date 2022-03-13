const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();
router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProduct);
module.exports = router;
