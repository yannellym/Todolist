//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true})); //to use down the line with red.body
app.use(express.static("public"));

app.get("/", function(req, res){

let today = new Date();

let options = {
    weekday: "long",  //writes out entire day of week
    day: "numeric",     //sets a numeric value
    month: "long"
};

let day = today.toLocaleDateString("en-US", options); //this will set the date to English and pass in option
   
  
res.render("list", {kindOfDay: day, newListItems: items   //gets sent over to list.ejs
});

});

app.post("/", function(req, res) {
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});



app.listen(3000, function () {
  console.log("Server started on port 3000.");
});