import express from 'express';
import * as OrderController from '../controllers/order.controller.js';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth.js';

const Router = express.Router();
const BASE_URL = '/api/orders';

Router.get(`${BASE_URL}/:userId`, verifyToken,isAuth, isAdmin, OrderController.getAllOrders);
Router.post(`${BASE_URL}/:userId`, verifyToken, isAuth, OrderController.postOrder);
Router.get(`${BASE_URL}/details/:userId/:orderId`, verifyToken, isAuth, OrderController.getOrderDetails);
Router.get(`${BASE_URL}/user/:userId`, verifyToken, isAuth, OrderController.getOrderByUser);
Router.put(`${BASE_URL}/:userId/:orderId`, verifyToken, isAuth, OrderController.updateOrder);
Router.delete(`${BASE_URL}/:userId/:orderId`, verifyToken, isAuth, OrderController.deleteOrder);

export default Router;