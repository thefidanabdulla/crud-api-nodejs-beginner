const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// get
app.get("/", (req, res) => {
  res.send("salam from node api saaaalam");
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

// create
app.post("/api/products", async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
});

// update
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product){
      return res.status(404).json({ message: "Product not found :/" })
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// delete

app.delete('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    
    if(!product){
      return res.status(404).json({ message: "Product not found :/" });
    }

    res.status(200).json({ message: "Product deleted successfully" })

  } catch (error) {
    res.status(500).json({ message: error.message });
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
