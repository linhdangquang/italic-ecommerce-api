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

export const delProduct = (req, res) => {
  const { productId } = req.params;
  const product = products.filter((product) => product.id !== Number(productId));
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    products.splice(products.indexOf(product), 1);
    res.status(200).json(product);
  }
};

export const updateProduct = (req, res) => {
  const { productId } = req.params;
  const { name, price } = req.body;
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    product.id = Number(productId);
    product.name = name;
    product.price = price;
    res.status(200).json(product);
  }
};
