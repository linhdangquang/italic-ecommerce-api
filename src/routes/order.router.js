import express from 'express';
import * as OrderController from '../controllers/order.controller';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth';

const Router = express.Router();
const BASE_URL = '/api/orders';

Router.get(`${BASE_URL}/:userId`, verifyToken,isAuth, isAdmin, OrderController.getAllOrders);
Router.post(`${BASE_URL}/:userId`, verifyToken, isAuth, OrderController.postOrder);
Router.get(`${BASE_URL}/details/:userId/:orderId`, verifyToken, isAuth, OrderController.getOrderDetails);

export default Router;