// require express framework
var express = require("express");

// require server app
var rest = require("rest");

// create express app
var app = express()

// declare directory for static content
app.use(express.static(__dirname + "main/public"));

// attach server routs
rest(app);

// catch every requets and redirect it to index.html
app.get("/*", function(req, res) {
	res.sendFile(__dirname + "main/public/index.html");
});

// start server on port 3000
app.listen(3000, function() {
	console.log "Listening on 3000";
});