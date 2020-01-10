// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        console.log(`/api/friends req.body = ${JSON.stringify(req.body)}`);
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware

        var i; var j; var bestScore = [];
        console.log(`${req.body.scores}`);
        for (var i = 0; i < friendsData.length; i++) {
            // console.log(`${friendsData[i].scores}`);
            bestScore.push(getDiffs(req.body.scores, friendsData[i].scores));
            console.log(`Index ${i} score: ${bestScore}`);
        }   

        var lowestScore = Math.min(...bestScore);
        var index = bestScore.indexOf(lowestScore);
        console.log(`Index of best match is ${index}`);
        res.json({ name: friendsData[index].name, photo: friendsData[index].photo});

    });

    app.post("/api/test", function (req, res) {
        console.log(`/api/test req = ${req}`);
        res.json({ ok: true });
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the array of data
        friendsData.length = 0;

        res.json({ ok: true });
    });
};

function getDiffs(arr1, arr2) {
    const finalArr = [];
    console.log(`Array 1: ${arr1}`);
    console.log(`Array 2: ${arr2}`);
    for(var i = 0; i < arr1.length; i++) {
        finalArr.push(Math.abs(parseInt(arr1[i]) - arr2[i]));
    }

    console.log(finalArr.reduce((a, b) => a + b, 0));
    return finalArr.reduce((a, b) => a + b, 0);
}
