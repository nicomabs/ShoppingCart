const express = require('express');

const app = express();

const port = process.env.port || 5000;

const bodyParser = require("body-parser");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Controler

// ROUTES

app.get('/', (req,res) => {
  res.send('HOMEPAGE');
});

app.get('/about', (req,res) => {
  res.send('ABOUT PAGE');
});

require("./app/routes/product.routes.js")(app);

// Start listening server

app.listen(port, () => console.log(`Server started on port ${port}`));

