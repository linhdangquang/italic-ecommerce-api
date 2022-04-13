import User from '../models/user.model';

export const signUp = async (req, res) => {
  const { email } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: 'Email already exists',
      });
    }
    const user = await User(req.body).save();
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      message: 'User created successfully',
  });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials
    (email, password);
    if (user.message) {
      return res.status(400).send({
        message: user.message,
      });
    }
    const token = await user.generateAuthToken();
    res.status(200).send({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatarName: user.avatarName,
        avatarUrl: user.avatarUrl,
        token: token,
      },
      token,
      message: 'Sign in successfully',
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password',);
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}

export const changeInfo = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatarName: user.avatarName,
        avatarUrl: user.avatarUrl,
        token: user.token,
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
}


