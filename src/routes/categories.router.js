import express from 'express';
import * as CategoryController from '../controllers/categories.controller.js';
  import { isAdmin, isAuth, verifyToken } from '../middleware/auth.js';

const Router = express.Router();
const URL = '/api/categories';

Router.get(URL, CategoryController.getCategories);
Router.post(`${URL}/:userId`, verifyToken, isAuth, isAdmin ,CategoryController.createCategory);
Router.get(`${URL}/:categoryId`, CategoryController.getCategoryDetail);
Router.put(`${URL}/:userId/:categoryId`, verifyToken, isAuth, isAdmin, CategoryController.updateCategory);
Router.delete(`${URL}/:userId/:categoryId`,verifyToken, isAuth, isAdmin, CategoryController.deleteCategory);


export default Router;
