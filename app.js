const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const { urlencoded } = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

var items = ["buy food", "cook food", "eat food"];
var workList = [];


app.get("/", function(req, res){
    var day = date();

    res.render('list', {listTitle: day, newListItem: items});
})

app.post("/", function(req, res){
    var item = req.body.newItem;
    var list = req.body.list;
    // console.log(list);
    if(list === "Work")
    {
        workList.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res){
    res.render('list', {listTitle: "Work", newListItem: workList});
})

// app.post("/work", function(req, res){

// })


app.listen(3000, function(){
    console.log("server started on port 3000");
})