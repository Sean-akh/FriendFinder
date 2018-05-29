//load data
var members = require("../data/friends.js");
var path = require("path");
var bodyParser = require("body-parser");

module.exports = function(app) {
    //connect to members data
    app.get("/api/friends", function(request, response){
        response.json(members);
    });

    app.post("/api/friends", function(request, response){
    //define best matching member to the applicant
    var compatible = {
        name: "",
        photo: "",
        compareDifference: 1000
    };

console.log(request.body);

    //result of survey from the applicant
    var applicantData = request.body;
    var applicantScore = applicantData.scores;

console.log("applicant score is: " + applicantScore);

    //calculate the total difference between applicant and each user
    var totalDifference = 0;

    //loop through each members
    for (var i = 0; i < members.length; i++) {
        totalDifference = 0;
      
        //loop through the arrays of scores
        for (var j = 0; j < members[i].scores[j]; j++) {
            totalDifference = Math.abs(parseInt(applicantScore[j]) - parseInt(members[i].scores[j]));
            if (totalDifference <= compatible.compareDifference) {
                compatible.name = members[i].name;
                compatible.photo = members[i].photo;
                compatible.compareDifference = totalDifference;
            }

        }
    }

    members.push(applicantData);

    response.json(compatible);

});

///////////////////////////
//end of module.export
}
//////////////////////////