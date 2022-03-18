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

export const delProduct = (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndDelete(productId, (err, product) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(product);
    }
  });
};

export const updateProduct = (req, res) => {
  const { productId } = req.params;
  const {
    name, price, description, image,
  } = req.body;
  Product.findByIdAndUpdate(
    productId,
    {
      name,
      price,
      description,
      image,
    },
    {
      timestamps: { createdAt: false, updatedAt: true },
      new: true,
      runValidators: true,
    },
    (err, product) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(product);
      }
    },

  );
};
