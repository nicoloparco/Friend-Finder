var friendsArray = require("../app/data/friends")

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray)
    });

    app.post("/api/friends", function (req, res){
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            picture: "",
            difference = 1000
        };

        var userData = req.body
        console.log(userData);
        var userName = userData.name;
        console.log(userName);
        var userScores = userData.scores
        console.log(userScores);
    });
}
