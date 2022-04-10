import mongoose from "mongoose";
import isMobilePhone from 'validator/lib/isMobilePhone'
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
      product: {
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
    enum: ["pending", "completed", "cancelled"],
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