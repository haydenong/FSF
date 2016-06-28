/**
 * Created by HF on 28/6/2016.
 */

//Load express - look inside node modules directory
var express = require("express");

//Create an instance of express application
var app = express();

//Serve static files from the "public" directory
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));

//Middleware - function that handles or processes request
// Command for browser to load error page when page not found
app.use(function (req,res) {
    console.info("FILE NOT FOUND IN PUBLIC: %s", req.originalUrl);

    res.redirect("/error.html");
})

//Set port
app.set("port", process.argv[2] || process.env.APP_PORT || 3000);

//Start server on port
app.listen(app.get("port"),function(){
    console.info("Application started on port %d", app.get("port"));
});


