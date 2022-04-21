import mongoose from "mongoose";

const herobannerSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subtitle: { type: String, required: true, trim: true },
  buttonText: { type: String, required: true, trim: true },
  buttonLink: { type: String, required: true, trim: true },
  status: { type: Number, enum: [0 , 1], default: 0 },
  imageUrl: { type: String, required: true, default: 'https://img.icons8.com/ios-filled/100/000000/no-image.png' },
  imageName: { type: String, required: true, default: 'no-image.png' },
});

export default mongoose.model('HeroBanner', herobannerSchema);
