import express from 'express';
import * as productsController from '../controllers/products.controller';

const router = express.Router();

router.post('/', productsController.postProduct);
router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProduct);

export default router;
