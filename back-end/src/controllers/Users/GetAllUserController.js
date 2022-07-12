const { getAll } = require('../../services/Users');

const getAllController = async (req, res) => {
  try {
    const users = await getAll();
    return res.status(201).json(users);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};

module.exports = getAllController;
