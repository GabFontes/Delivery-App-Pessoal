const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await login(req.body);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default loginController;