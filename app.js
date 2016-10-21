
var express = require("express");
var path = require("path");

const port = 8081;
const app = express();

app.use(express.static("views"));

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(port, function(){
  console.log("Hello world is running!");
});
