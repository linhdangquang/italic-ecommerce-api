export const getProducts = (req, res) => {
  res.send(`
    <h1>Products Page</h1>
  `);
};

export const getProduct = (req, res) => {
  res.send(`
    <h1>Product ${req.params.productId}</h1>
  `);
  console.log(req.params);
};
