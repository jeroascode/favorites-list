const userController = {};
const user = require("../models/user");

userController.registerUser = async (req, res) => {
  try {
    const reqUser = req.body;
    const newUser = new user({
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

module.exports = userController;
