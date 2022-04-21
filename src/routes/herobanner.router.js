import express from 'express';
import * as HeroBannerController from '../controllers/herobanner.controller.js';
import { isAdmin, isAuth, verifyToken } from '../middleware/auth.js';

const Router = express.Router();
const URL = '/api/herobanner';

Router.get(URL, HeroBannerController.getAllHeroBanner);
Router.post(`${URL}/:userId`, verifyToken, isAuth, isAdmin ,HeroBannerController.createHeroBanner);
Router.get(`${URL}/:id`, HeroBannerController.getOneHeroBanner);
Router.put(`${URL}/:userId/:id`, verifyToken, isAuth, isAdmin, HeroBannerController.updateHeroBanner);
Router.delete(`${URL}/:userId/:id`,verifyToken, isAuth, isAdmin, HeroBannerController.deleteHeroBanner);

export default Router;