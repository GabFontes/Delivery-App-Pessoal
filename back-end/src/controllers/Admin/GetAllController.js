const AdminService = require('../../services/Admin');

const GetAllController = async (req, res, next) => {
  try {
    const users = await AdminService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = GetAllController;
