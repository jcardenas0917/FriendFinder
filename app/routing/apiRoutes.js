var friends = require('../data/friends.js');

// Export the function
module.exports = app => {

    // Sets the get for the api/friends route
    app.get('/api/friends', (req, res) => res.json(friends));

    // Set the post for the api/friends route
    app.post('/api/friends', (req, res) => {
        // Set variables only needed for the post
        let dif = 0;
        var matchName = '';
        var matchPhoto = '';
        let newFriend = req.body
        // Loops through all the friends arrays
        friends.forEach(friend => {
            // Variables for comparing matches
            let matchedArray = [];
            var totalDif = 0;
            console.log(friend);

            //loops through both user and and friend to and calculates the absolute value
            friend.scores.forEach(i => {matchedArray.push(Math.abs(parseInt(newFriend.scores[i]) - parseInt(friend.scores[i])))
                console.log(matchedArray)
                console.log(newFriend[i])
            });
           

            // This reduces the matchScoresArray into a single value in a variable
            let add = (total, num) => total + num;
            totalDif = matchedArray.reduce(add, 0);
            console.log(totalDif)
            // If the above value is smaller than the previous difference...
            if (totalDif < dif) {
                // Set it as the previous difference...
                dif = totalDif;
                // And set these variables to the appropriate friend match
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        // Once the cycle is complete, the match with the least difference will remain,
        // and that data will be sent as a json object back to the client
        res.json({
            name: matchName,
            photo: matchPhoto
        });
        
        // This adds the new users sent data object to friends.js
        friends.push(newFriend);
    });
}