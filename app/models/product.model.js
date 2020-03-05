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

Product.getAll = result => {
  sql.query("SELECT * FROM T_Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM T_Products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE T_Products SET name = ?, brand = ?, price = ?, quantity = ?, id_category = ? WHERE id = ?",
    [product.name, product.brand, product.price, product.quantity, product.id_category, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM T_Products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM T_Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

  module.exports = Product;