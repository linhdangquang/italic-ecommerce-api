import Order from '../models/order.model';
import User from '../models/user.model';
import Product from '../models/products.model';
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}, '-password');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const postOrder = async (req, res) => {
  try {
    const order = await Order(req.body).save();
    res.status(201).json({
      order,
      message: 'Create order successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    console.log(req.params.orderId);
    const userId = order.user;
    const user = await User.findById(userId, '-password');
    const products = await Promise.all(
      order.products.map(async (product) => {
        const productId = product.productId;
        const productItem = await Product.findById(productId);
        return {
          productItem,
          quantity: product.quantity,
        };
      })
    );
    res.status(200).json({
      orderDetails: {
        orderInfo: {
          _id: order._id,
          address: order.address,
          city: order.city,
          phone: order.phone,
          total: order.total,
          name: order.name,
          email: order.email,
          status: order.status,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        },
        userInfo: {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl,
          avatarName: user.avatarName,
        },
        products,
      },
      message: 'Get order successfully',
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export const getOrderByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user: userId }, '-__v').populate('user', [
      'name',
      'email',
      'avatarUrl',
      'avatarName',
    ]);
    res.status(200).json({
      userOrders: orders,
      message: 'Get order by user successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByIdAndUpdate(orderId, req.body, {
      new: true,
    });
    res.status(200).json({
      order,
      message: 'Update order successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByIdAndDelete(orderId);
    res.status(200).json({
      order,
      message: 'Delete order successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
