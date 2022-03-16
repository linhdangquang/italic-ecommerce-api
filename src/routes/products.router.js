import express from 'express';
import * as productsController from '../controllers/products.controller';

const router = express.Router();

router.get('/', productsController.getProducts);
router.post('/', productsController.postProduct);
router.get('/:productId', productsController.getProduct);
router.delete('/:productId', productsController.delProduct);
router.put('/:productId', productsController.updateProduct);

export default router;
