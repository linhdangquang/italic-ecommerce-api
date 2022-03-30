import User from '../models/user.model';

export const userById = async (req, res, next, id) => {
  try {
    const user =await User.findById(id).select('-password');
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
}