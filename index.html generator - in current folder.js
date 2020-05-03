//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname);
// const directoryPath = path.join(__dirname, "input"); //earlier code to apped input so that path would be currentDirectory/input/
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  let htmlelements = [];
  //listing all files using forEach

  //DELETE ALL CONTENT
  fs.writeFile("index2.html", "", function () {
    console.log("done");
  });

  files.forEach(function (file) {
    // Do whatever you want to do with the file
    if (file.includes(".html")) {
      file = file.substring(0, file.length - 5);
      htmlelements.push(`<a href="${file}.html">${file}</a><br>`);
    }
    // console.log(htmlelements);
  });
  console.log(htmlelements.join(""));
  fs.appendFile("index2.html", htmlelements.join(""), function (err) {
    if (err) {
      // append failed
    } else {
      // done
      // htmlelements
    }
  });
});
