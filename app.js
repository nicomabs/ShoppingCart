const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors());
const bodyParser = require("body-parser");


const port = process.env.port || 3030;



// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES

app.get('/', (req,res) => {
  res.json({ message : "Bienvenue sur Nicommerce" });
});


require("./app/routes/product.routes.js")(app);

// Start listening server

app.listen(port, () => console.log(`Server started on port ${port}`));


