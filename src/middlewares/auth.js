
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Unauthorized access!')
    });
  }
};

export default auth;