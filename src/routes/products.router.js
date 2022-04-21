import express from 'express';
import * as productsController from '../controllers/products.controller.js';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth.js';

const router = express.Router();
const URL = '/api/products';

router.get(URL, productsController.getProducts);
router.post(`${URL}/:userId`, verifyToken, isAuth, isAdmin, productsController.postProduct);
router.get(`${URL}/:productId`, productsController.getProduct);
router.delete(`${URL}/:userId/:productId`, verifyToken, isAuth, isAdmin, productsController.delProduct);
router.put(`${URL}/:userId/:productId`, verifyToken, isAuth, isAdmin, productsController.updateProduct);

export default router;
