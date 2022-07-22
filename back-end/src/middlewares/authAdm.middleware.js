const authAdmMiddleware = (req, res, next) => {
  const { role } = req.user;
  if (role !== 'administrator') {
    return res.status(401).json(
      { message: 'You do not have permission to access this page' },
    );
  }
  next();
};
module.exports = authAdmMiddleware;
