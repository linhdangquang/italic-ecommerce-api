import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/user.model';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne(
      { _id: data._id, 'token': token },
      '-password'
    );

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const isAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(400).json({ message: 'Not authorized to access' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
