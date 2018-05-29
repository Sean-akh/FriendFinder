//dependencies
var path = require("path");

//routing, HTML GET request
module.exports = function(app) {
    //survey page
    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //home page (default page)
    app.get("/home", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/home.html"));
    });
/*
    //unknown goes to home page
    app.get("*", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/home.html"));
    });*/

    //CSS file
    app.get("/style", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/assets/css/style.css"));
    });
    
    //image for banner
    app.get("/banner", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/assets/images/banner.jpg"));
    });

     //images
     app.get("/images", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/assets/images/"));
    });
   
    //java file
    app.get("/app-java", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/assets/javascript/app-java.js"));
    });
};