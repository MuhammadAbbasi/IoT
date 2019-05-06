var fs = require("fs");
var options = { encoding: "utf-8" };
fs.readFile("myFile.txt",options,function(err,data){
    if (err) {
        console.error("Error in reading File!");
        return;
    }
    console.log(data);
});

console.log("This line is to be executed first! Because there \nlies parallel processing");