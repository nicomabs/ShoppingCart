 
module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // Create a new Product
    app.post("/products", products.create);
};