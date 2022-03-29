import jwt from 'jsonwebtoken'
import 'dotenv/config'
import User from '../models/user.model'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '') ;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ _id: data._id, 'tokens.token': token }, { timestamps: { createdAt: false } });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized to access' });
  }
}