const fs = require("fs");

// fs.mkdir("vikku", (err) => {
//   console.log(err);
// });

// fs.writeFile("./vikku/bio.txt", "yeah asynchronous data", (err) => {
//   console.log("file is created");
// });

// fs.appendFile("./vikku/bio.txt", " yeah added new data", (err) => {
//   console.log(err);
// });
// console.log("data is added");

// fs.readFile("./vikku/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log(err);
// });

// fs.rename("./vikku/bio.txt", "./vikku/mybio.txt", (err) => {
//   console.log("file is renamed");
// });

// fs.unlink("./vikku/mybio.txt", (err) => {
//   console.log("file is deleted");
// });

fs.rmdir("vikku", (err) => {
  console.log("directory removed successfully");
  console.log(err);
});
