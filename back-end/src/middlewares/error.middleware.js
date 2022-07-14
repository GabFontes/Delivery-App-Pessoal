module.exports = (error, _req, res, _next) => {
  if (error.code) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(500).json({ message: 'internal error' });
};
