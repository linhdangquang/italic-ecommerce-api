import Product from '../models/products.model';

export const getProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(products);
    }
  });
};

export const getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: 'error' });
  }
};

export const delProduct = (req, res) => null;

export const updateProduct = (req, res) => null;
