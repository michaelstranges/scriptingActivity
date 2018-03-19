var request = require("request");
var fs = require("fs");

request.get("https://sytantris.github.io/http-examples/future.jpg")
  .on("errr", function(err){
    throw err;
  })
  .on("response", function(response){
    console.log(response.statusMessage);
    console.log(response.headers['content-type']);
    console.log("Download Complete!");
  })
  .pipe(fs.createWriteStream("./future.jpg"));
  console.log("Downloading image...");