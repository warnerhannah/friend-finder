const path = require("path")
// const express = require("express")

module.exports = (app) => {
   app.get("/", (req, res) => {
      return res.sendFile(path.join(__dirname, "../public/home.html"));
   });
  
   app.get("/survey", (req, res) => {
      return res.sendFile(path.join(__dirname, "../public/survey.html"));
   });
  
   app.get('/*', function(req,res){
     return res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}