const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Product = require("./src/models/product.js");
require("./src/db/mongoose.js");
app.use(express.json());
// CRUD Operations.
// Seller adds a new product.
app.post("/product/seller", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(200).send(product);
  } catch (Error) {
    res.status(400).send(Error);
  }
});
// Seller Adds More than one product at a time
app.post("/product/seller", async (req, res) => {
  try {
    const products = await Product.insertMany([req.body]);
    res.status(200).send(products);
  } catch (Error) {
    res.status(400).send(Error);
  }
});
// Seller can see all the listed products and get the functionality of customer
app.get("/product/seller", async (req, res) => {
  try {
    const name = req.body.name;
    const type = req.body.type;
    const category = req.body.category;
    const priceMax = req.body.priceMax;
    const priceMin = req.body.priceMin;

    const products = await Product.find({
      name,
      type,
      category,
      priceMax,
      priceMin,
    });
    res.status(200).send(products);
  } catch (Error) {
    res.status(400).send(Error);
  }
});
// Updating the products
app.patch("/product/seller/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).send(product);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

// Deleting a product
app.delete("/product/seller/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).send(user);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

// Customer can get the product.
app.get("/product/customer", async (req, res) => {
  try {
    const name = req.body.name;
    const type = req.body.type;
    const category = req.body.category;
    const priceMax = req.body.priceMax;
    const priceMin = req.body.priceMin;

    const products = await Product.find({
      name,
      type,
      category,
      priceMax,
      priceMin,
    });
    res.status(200).send(products);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

app.listen(port, () => {
  console.log("Server is up and running on port" + port);
});
