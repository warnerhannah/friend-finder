const express = require("express")
const path = require("path");
const app = express();
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./javascript'))
// 
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// 
app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on: http://localhost:" + (process.env.PORT || 8080));
  });