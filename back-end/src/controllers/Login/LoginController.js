const LoginService = require('../../services/Login/LoginService');

module.exports = LoginController = async (req, res, next) => {
  try {
    const user = await LoginService(req.body);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next(err)
  }
};
