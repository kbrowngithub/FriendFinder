// Require dependencies
var path = require("path");
var express = require("express");

// Create an express app instance
var app = express();

// Set port to either Heroku port or local port depending on env
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    // res.json(path.join(__dirname, "public/home.html"));
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});




// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
