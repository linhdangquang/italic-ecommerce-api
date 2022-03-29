import express from 'express';
import * as CategoryController from '../controllers/categories.controller';
import { verifyToken } from '../middleware/auth';

const Router = express.Router();
const URL = '/api/categories';

Router.get(URL, CategoryController.getCategories);
Router.post(URL, verifyToken ,CategoryController.createCategory);
Router.get(`${URL}/:categoryId`, CategoryController.getCategoryDetail);
Router.put(`${URL}/:categoryId`, CategoryController.updateCategory);
Router.delete(`${URL}/:categoryId`, CategoryController.deleteCategory);

export default Router;
