const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute)

// get
app.get("/", (req, res) => {
  res.send("salam from node api saaaalam");
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
