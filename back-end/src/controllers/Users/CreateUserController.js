const UserService = require('../../services/Users');

module.exports = CreateUserController = async (req, res, next) => {
  try {
    const user = await UserService.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(err)
  }
};
