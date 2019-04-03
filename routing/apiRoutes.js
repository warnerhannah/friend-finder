const friendsArr = require("../data/friends")

module.exports = (app) => {
    app.post("/api/friends", (req, res) => {
        const friend = req.body;
        friendsArr.push(friend);
        res.json(friendsArr);
        console.log(friendsArr);
    });
    
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArr);
    });
};