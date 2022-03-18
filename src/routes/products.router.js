import express from 'express';
import * as productsController from '../controllers/products.controller';

const router = express.Router();
const URL = '/api/products';

router.get(URL, productsController.getProducts);
router.post(URL, productsController.postProduct);
router.get(`${URL}/:productId`, productsController.getProduct);
router.delete(`${URL}/:productId`, productsController.delProduct);
router.put(`${URL}/:productId`, productsController.updateProduct);

export default router;
