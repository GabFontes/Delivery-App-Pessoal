const AdminService = require('../../services/Admin');

const DestroyUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await AdminService.destroy(id);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = DestroyUserController;
