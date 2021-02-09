const fs = require("fs");
const http = require("http");
const server = http.createServer();

// READ DATA IN CONTINUOUS MANNER CHUNK BY CHUNK

// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("inputs.txt");
//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end("file not found");
//   });
// });

// READ WHOLE FILE AT A TIME

// fs.readFile("input.txt", (err, data) => {
//   if (err) return console.error(err);
//   res.end(data.toString());
// });
// server.listen(8000, "127.0.0.1");
// fs.mkdirSync("vikram");

// fs.writeFileSync("./vikram/bio.txt", "hello this made by vikram mahara");

// fs.appendFileSync(
//   "./vikram/bio.txt",
//   " yeah i am adding new data into it by appending class"
// );

// var read_str = fs.readFileSync("./vikram/bio.txt", "utf-8");
// console.log(read_str);

// fs.renameSync("./vikram/bio.txt", "./vikram/mybio.txt");

// fs.unlinkSync("./vikram/mybio.txt");
// fs.rmdirSync("./vikram");

// fs.renameSync("app.js", "ap.js");

// const rstream = fs.createReadStream("input.txt");
// rstream.pipe(res);
