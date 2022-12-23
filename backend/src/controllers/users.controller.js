const userController = {};
const User = require("../models/User");

userController.registerUser = async (req, res) => {
  try {
    const reqUser = req.body;
    const newUser = new User({
      name: reqUser.name,
      nickname: reqUser.nickname,
      document: reqUser.document,
    });
    await newUser.save();
    res.json({ message: "Usuario registrado correctamente." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

userController.login = async (req, res) => {
  try {
    const reqUser = req.body;
    const { document } = {
      document: reqUser.document,
    };
    const user = await User.findOne({ document });
    if (!user) {
      return res.status(400).json({ message: "El documento no existe." });
    }
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = userController;
