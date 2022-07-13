const UserService = require('../../services/Users');

module.exports = LoginController = async (req, res, next) => {
  try {
    const user = await UserService.login(req.body);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next(err)
  }
};
