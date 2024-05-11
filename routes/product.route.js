const express = require("express");
const router = express.Router();
const Product = require("./../models/product.model.js");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");


//get
router.get('/', getProducts);
router.get('/:id', getProduct);

//create
router.post('/', createProduct);

//update
router.put('/:id', updateProduct);

//delete
router.delete('/:id', deleteProduct);

module.exports = router;