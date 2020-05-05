//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "");
console.log(directoryPath);
const filePath = "index2.html";
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  let htmlelements = [];
  //listing all files.html using forEach

  //DELETE ALL CONTENT
  fs.writeFile(filePath, "", function () {
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
  fs.appendFile(filePath, htmlelements.join(""), function (err) {
    if (err) {
      // append failed
    } else {
      // done
      // htmlelements
    }
  });
});
