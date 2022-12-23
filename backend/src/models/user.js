const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true },
  nickname: { type: String, require: true },
  document: { type: Number, require: true },
});

module.exports = model("User", userSchema);
