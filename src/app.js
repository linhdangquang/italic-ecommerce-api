const express = require('express');

const app = express();
const PORT = 5000;
const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products.router');

app.use('/', homeRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
