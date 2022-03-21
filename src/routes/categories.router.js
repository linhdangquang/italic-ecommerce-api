import express from 'express';
import * as CategoryController from '../controllers/categories.controller';

const Router = express.Router();
const URL = '/api/categories';

Router.get(URL, CategoryController.getCategories);
Router.post(URL, CategoryController.createCategory);
Router.get(`${URL}/:categoryId`, CategoryController.getCategoryDetail);
Router.put(`${URL}/:categoryId`, CategoryController.updateCategory);
Router.delete(`${URL}/:categoryId`, CategoryController.deleteCategory);

export default Router;
