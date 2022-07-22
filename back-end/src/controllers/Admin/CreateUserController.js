const AdminService = require('../../services/Admin');

const CreateUserController = async (req, res, next) => {
  try {
    const user = await AdminService.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = CreateUserController;
