import express from 'express';
import path from 'path';


/* eslint-disable no-console */

const port = 8081;
const app = express();//we need an instance of express

app.use(express.static("dist"));

//our index location - the starting point for our site
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, './dist/index.html'));
});

app.get("styles.css", function(req,res){
  res.sendFile(path.join(__dirname, "./dist/styles.css"));
});

app.get("bundle.js", function(req,res){
  res.sendFile(path.join(__dirname, "./dist/bundle.js"));
});

// we are starting up express, listening on the port specified above
// and we open the browser, using the "open" package which is on npm
app.listen(port);
