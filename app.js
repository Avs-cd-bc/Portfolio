var express = require("express");

const port = 8081;
const app = express();

app.get("/", function(req,res){
  res.send("Hello World");
});

app.listen(port, function(){
  console.log("Hello world is running!");
});
