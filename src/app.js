import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import HomeRouter from './routes/home.router';
import ProductRouter from './routes/products.router';
import CategoryRouter from './routes/categories.router';
import AuthRouter from './routes/auth.router';
import HeroBannerRouter from './routes/herobanner.router';
import OrderRouter from './routes/order.router';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.use(HomeRouter);
app.use(ProductRouter);
app.use(CategoryRouter);
app.use(AuthRouter);
app.use(OrderRouter);
app.use(HeroBannerRouter);

mongoose.connect(process.env.MONGODB_URL)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,  'public' ,  'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
