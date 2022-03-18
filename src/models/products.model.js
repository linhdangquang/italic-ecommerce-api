import mongoose, { Schema } from 'mongoose';

const productsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: [1, 'Min number is 1'] },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: { createdAt: false, updatedAt: true } });

export default mongoose.model('Product', productsSchema);
