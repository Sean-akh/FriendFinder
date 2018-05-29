//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//start the server
var app = express();

//define port
const PORT = process.env.PORT || 8080;

//define handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//define routings
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//start the server
app.listen(PORT, function(){
    console.log("app listening on port: " + PORT);
});