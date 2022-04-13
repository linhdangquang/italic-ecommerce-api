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
    res.status(401).json( { message: 'Not authorized to access ' });
  }
};

export const isAuth = async (req, res, next) => {
  try {
    if (req.user._id.toString() === req.params.userId) {
      next();
    }else if (req.user.role === 'admin') {
      next();
    }
    else {
      res.status(401).json({ message: 'User id not match!' });
    }
  } catch (error) {
    console.log(error);
  }
};


export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(400).json({ message: 'You have no access' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
