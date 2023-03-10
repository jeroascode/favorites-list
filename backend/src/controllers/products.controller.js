const productController = {};
const Product = require("../models/product");

productController.createProduct = async (req, res) => {
  try {
    const reqProduct = req.body;
    const newProduct = new Product({
      name: reqProduct.name,
      available: reqProduct.available,
    });
    await newProduct.save();
    res.json({ message: "Producto creado correctamente." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


productController.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ products: products });
};

module.exports = productController;
