const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    available: { type: String, require: true },
  }
);

module.exports = model("Product", productSchema);
