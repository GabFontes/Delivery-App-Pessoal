const SellerService = require('../../services/Seller');

const GetAllController = async (req, res, next) => {
  try {
    const users = await SellerService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = GetAllController;
