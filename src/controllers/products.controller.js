import Product from '../models/products.model';

export const getProducts = (req, res) => {
  const limit = req.query.limit;
  const textSearch = req.query.q;
  Product.find({}, (err, products) => {
    if (err) {
      return res.status(400).json(err);
    } else {
      res.status(200).json(products);
    }
  })
    .where('name')
    .regex(new RegExp(textSearch, 'i'))
    .limit(limit);
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
    res.status(400).json(err);
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
  Product.findByIdAndUpdate(
    productId,
    req.body,
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
    }
  );
};
