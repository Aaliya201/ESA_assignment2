'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();

// define port to run express app
const  port = process.env.PORT || 7000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});
/*
User = require('./models/userModel'), 
CartItem = require('./models/cartModel'), 
ProductItem = require('./models/todoModel'),
*/

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});

// Import DB Connection
require("./config/db");

// Import API route

var cartRoutes = require('./api/routes/cartRoutes'); 
var userRoutes = require('./api/routes/userRoutes'); 
var productRoutes = require('./api/routes/todoRoutes');

cartRoutes(app);
userRoutes(app); 
productRoutes(app);