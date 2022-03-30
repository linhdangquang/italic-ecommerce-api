import express from 'express';
import * as CategoryController from '../controllers/categories.controller';
import { userById } from '../controllers/user.controller';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth';

const Router = express.Router();
const URL = '/api/categories';

Router.get(URL, CategoryController.getCategories);
Router.post(`${URL}`, verifyToken, isAuth, isAdmin ,CategoryController.createCategory);
Router.get(`${URL}/:categoryId`, CategoryController.getCategoryDetail);
Router.put(`${URL}/:categoryId`, CategoryController.updateCategory);
Router.delete(`${URL}/:categoryId`, CategoryController.deleteCategory);

Router.param('userId', userById);

export default Router;
