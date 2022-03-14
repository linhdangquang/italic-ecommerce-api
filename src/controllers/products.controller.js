import products from '../models/products.model';

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProduct = (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.status(200).json(product);
  }
};

export const postProduct = (req, res) => {
  const { name, price } = req.body;
  const product = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(product);
  res.status(201).json(product);
};
