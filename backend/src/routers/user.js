const express = require("express");
const router = express.Router();

const { registerUser, login } = require("../controllers/users.controller");

router.post("/", registerUser);
router.post("/login", login);

module.exports = router;
