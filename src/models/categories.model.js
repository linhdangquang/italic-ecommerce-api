import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
  name: { required: true, type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
