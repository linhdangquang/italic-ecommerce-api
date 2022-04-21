import mongoose from "mongoose";
import isMobilePhone from 'validator/lib/isMobilePhone';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: [isMobilePhone, 'Please fill a valid phone number'],
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      }

    }
  ],
  total: {
    type: Number,
    required: true,

  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "delivery", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,

  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: { createdAt: false } });

export default mongoose.model("Order", orderSchema);
