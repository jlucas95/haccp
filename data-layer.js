const mongodb = require('mongodb');
const co = require('co');

var exports = module.exports = {};

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

exports.getForms = function(year, callback){
  db.collection("forms")
  .find({year: year})
  .toArray(function(error, documents){
    console.log('calling callback');
    callback(documents);
  });
}
