const sql = require("./db.js");

// constructor

const Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.brand = product.brand;
    this.price = product.price;
    this.quantity = product.quantity;
    this.id_category = product.id_category;
}

const Category = function(category) {
  this.id = category.id;
}

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO T_Products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created product: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };

  module.exports = Product;