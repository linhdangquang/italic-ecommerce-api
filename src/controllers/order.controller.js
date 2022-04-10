import Order from "../models/order.model";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}, '-password',);
    res.status(200).json({
      orders,
      message: "Get all orders successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}