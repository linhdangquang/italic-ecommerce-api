import mongoose, { Schema, ObjectId } from 'mongoose';

const productsSchema = new Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: [1, 'Min number is 1'] },
  description: { type: String, required: true, trim: true },
  image: { type: String, required: true, default: 'https://img.icons8.com/ios-filled/100/000000/no-image.png' },
  imageName: { type: String, required: true, default: 'no-image.png' },
  category: { type: ObjectId, ref: 'Category' },
  stock: { type: Number, required: true, min: [0, 'Min number is 0'] , default: 1},
  status: { type: Number, enum: [0 , 1], default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: { createdAt: false, updatedAt: true } });


export default mongoose.model('Product', productsSchema);
