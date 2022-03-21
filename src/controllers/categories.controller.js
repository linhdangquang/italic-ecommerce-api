import Category from '../models/categories.model';
import Product from '../models/products.model';

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getCategoryDetail = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    const products = await Product.find({ category: categoryId }).populate('category');
    res.json({ category, products });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    console.log(category);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: 'error',
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndUpdate(
      categoryId,
      req.body,
      {
        timestamps: { createdAt: false, updatedAt: true },
        new: true,
        runValidators: true,
      },
    );
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};
