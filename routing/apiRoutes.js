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
            difference : 1000
        };

        var userData = req.body
        console.log(userData);
        var userName = userData.name;
        console.log(userName);
        var userScores = userData.scores
        console.log(userScores);

        var b = userScores.map(function(item) {
            return parseInt(item, 10)
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log(`Name: ${userName}`)
        console.log(`Scores: ${userScores}`)

        var sum = b.reduce((a, b) => a + b, 0)
        console.log(`Sum of user score ${sum}`)
        console.log(`Best match difference: ${bestMatch.difference}`)
        console.log("++++++++++++++++++++++======================")

        for (var i = 0; i < friendsArray.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log(`Total Difference: ${totalDifference}`);
            console.log(`Best match difference: ${bestMatch.difference}`)

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log(`Total friend score: ${bfriendScore}`);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log(`--------------------------------------- ${totalDifference}`)

            if(totalDifference <= bestMatch.difference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.difference = totalDifference
            };
            console.log(`Total difference ${totalDifference}`);
        };

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
    });
}
