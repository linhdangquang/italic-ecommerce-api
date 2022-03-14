import express from 'express';
import productsRouter from './routes/products.router';
import homeRouter from './routes/home.router';

const app = express();
const PORT = 5000;

app.use('/', homeRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
