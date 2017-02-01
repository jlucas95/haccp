const express = require('express');
const data = require('./data-layer');



process.on("SIGINT", function(code){
  console.error("closing database connection");
  db.close();
  process.exit();

});


var app = express();
app.use(express.static("public"));
app.get("/forms/:year", function(req, res){
  var year = Number(req.params.year);
  if(typeof(year) == "number"){
    console.log('getting forms');
    data.getForms(year, function (documents){
      console.log('sending data');
      res.send(documents);
    });
  }
  else{
    console.log("incorrect request");
    res.sendStatus(400);
  }
});
app.get("/suppliers", function(req, res){
  res.send(["DeliXL","Daily Fresh","Becker-Rooyen"])
})
app.listen(8080, "");
