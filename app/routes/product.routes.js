 
module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // Create a new Product
    app.post("/products", products.create);

    // Retrieve all Customers
    app.get("/products/read", products.findAll);

    // Retrieve a single Customer with customerId
    app.get("/products/:productId", products.findOne);

};