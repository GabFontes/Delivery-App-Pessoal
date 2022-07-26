const LoginService = require('../../services/Login/LoginService');

const LoginController = async (req, res, next) => {
  try {
    const user = await LoginService(req.body);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = LoginController;
