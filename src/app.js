import express from 'express';
import mongoose from 'mongoose';
import productsRouter from './routes/products.router';
import homeRouter from './routes/home.router';
import checkAuth from './middlewares/checkAuth.middleware';

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  const startMs = Date.now();
  next();
  const endMs = Date.now() - startMs;
  console.log(`${req.method} ${req.baseUrl}${req.url}  ${res.statusCode} ${endMs}ms`);
});
app.use(express.json());

app.use('/', homeRouter);
app.use('/api/products', checkAuth, productsRouter);

mongoose.connect('mongodb://localhost:27017/we16308');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
