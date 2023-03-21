const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "text", "lorem.txt"), {
  encoding: "utf-8",
});

const ws = fs.createWriteStream(path.join(__dirname, "text", "newLorem.txt"));

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
