import express from 'express';
import * as OrderController from '../controllers/order.controller';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth';

const Router = express.Router();
const BASE_URL = '/api/orders';

Router.get(`${BASE_URL}`, OrderController.getAllOrders);

export default Router;