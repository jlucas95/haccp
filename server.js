const express = require('express');
const mongodb = require('mongodb');
const co = require('co');

var db = null;

co(function(){
  var client = mongodb.connect("mongodb://localhost:27017/forms", "", function(err, database){
    db = database;
    /*
    var op = db.collection("forms").insertOne({"w": 15, "y": 2017},{}, function(err, res){
      console.log(err);
      console.log(res);
      db.close();
    });*/
  });

});

process.on("SIGINT", function(code){
  console.error("closing database connection");
  db.collection("forms").insertOne({"w": 15, "y": 2017}, {}, function(err, res){
    console.log(err);
    console.log(res);
    db.close();
    process.exit();
  });

});


var app = express();
app.use(express.static("public"));
app.listen(8080);
