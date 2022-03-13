function getProducts(req, res) {
  res.send(`
    <h1>Products Page</h1>
  `);
}

function getProduct(req, res) {
  res.send(`
    <h1>Product ${req.params.productId}</h1>
  `);
  console.log(req.params);
}

module.exports = {
  getProducts,
  getProduct,
};
