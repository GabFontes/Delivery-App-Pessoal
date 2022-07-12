const { create } = require('../../services/Users');

const CreateUserController = async (req, res) => {
  try {
    const user = await create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = CreateUserController;