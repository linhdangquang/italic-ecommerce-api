const checkAuth = (req, res, next) => {
  const isAdmin = true;
  if (isAdmin) {
    console.log('User is authenticated');
    next();
  } else {
    res.send('User is not authenticated');
  }
};

export default checkAuth;
