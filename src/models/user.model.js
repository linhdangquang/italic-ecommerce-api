import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3 },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please fill a valid email address'],
    },
    password: { type: String, required: true, minlength: 6, },
    token: { type: String,  default: '' },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: { createdAt: false } }
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '24h',
  });
  user.token = token;
  return user.save().then(() => {
    return token;
  });
};

userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email });
  if (!user) {
    return { message: 'User not found' };
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return { message: 'Password is wrong' };
  }
  return user;
};

const User = mongoose.model('User', userSchema);

export default User;
