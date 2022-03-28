import User from '../models/user.model';

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: 'Email already exists',
      });
    }
    const user = await User({ name, email, password }).save();
    const token = await user.generateAuthToken();
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: user.tokens,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(400).send({
        message: 'Login failed! Check authentication credentials',
      });
    }
    const token = await user.generateAuthToken();
    res.status(200).send({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: user.tokens,
      },
      token,
      message: 'Sign in successfully',
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
