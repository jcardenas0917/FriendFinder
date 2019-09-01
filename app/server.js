// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log("App listening on PORT " + PORT));

// Requires and sets the HTML routes in this file
require('../app/routing/htmlRoutes')(app);

// Requires and sets the API routes in this file
require('../app/routing/apiRoutes')(app);