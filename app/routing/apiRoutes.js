let friends = require('../data/friends.js');

// Export the function
module.exports = app => {

    // Sets the get for the api/friends route
    app.get('/api/friends', (req, res) => res.json(friends));

    // Set the post for the api/friends route
    app.post('/api/friends', (req, res) => {
        // Set variables
        let dif = 0;
        let matchName = '';
        let matchPhoto = '';
        let newFriend = req.body;
        // Loops through all the friends arrays
        friends.forEach(friend => {
            let matchedArray = [];
            let totalDif = 0;
            let result = (total, num) => total + num;
            //loops through both user and and friend to and calculates the absolute value
            for (var i = 0; i < friend.scores.length; i++) {
                matchedArray.push(Math.abs(parseInt(newFriend.scores[i]) - parseInt(friend.scores[i])))
                totalDif = matchedArray.reduce(result, 0);
                console.log(dif)
                console.log(totalDif)
                // check if the value of each is the closest then setting the new value to the difference.
                if (totalDif <= dif) {
                    dif = totalDif;
                    matchName = friend.name;
                    matchPhoto = friend.photo;
                    console.log(matchName)
                }
            };
        });
        // Send the new match value to the client
        res.json({
            name: matchName,
            photo: matchPhoto
        });
        // This adds the new users sent data object to friends.js
        friends.push(newFriend);
    });
}