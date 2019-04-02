const friendsArr = require("../data/friends.js")

module.exports = (app) => {
    app.post("/api/friends", (req, res) => {
        console.log(req)
        console.log("Displaying Friends")
        res.json(friendsArr);
    });
    
    app.get("/api/friends", (req, res) => {
        let friend = req.body;
        friendsArr.push(friend);
        console.log("Friend Added")
    });
};