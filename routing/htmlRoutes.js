const express = require("express")
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./javascript'))

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "public/home.html"));
 });

 app.get("/survey", (req, res) => {
    return res.sendFile(path.join(__dirname, "public/survey.html"));
 });