const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");

const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Favorities List!");
});
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Page not founded." });
});

// Mongo Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected with mongo!!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await app.listen(port);
  console.log(`Server on port ${port}!`);
}

main();
