//dependencies
var path = require("path");

//routing, HTML GET request
module.exports = function(app) {
    //survey page
    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //home page (default page)
    app.get("/", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};