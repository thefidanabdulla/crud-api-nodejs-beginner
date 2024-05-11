const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("salam from node api saaaalam");
});

app.post("/api/products", async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

mongoose.connect("mongodb+srv://thefidanabdulla:luGkULvJG8DI0QaK@backenddb.fkpkffs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("connected to database");
  app.listen(3000, () => {
    console.log('salam 3000');
  });
})
.catch((error) => {
  console.log("connection failed")
  console.log(error)

})
