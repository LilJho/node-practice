const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "text", "text.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "text", "text.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "text", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "text", "promiseWrite.txt"),
      "\n\n Magiging totoo lang pagnagcode ka at nagaral ng mabuti about sa dapat aralin mo"
    );
    await fsPromises.rename(
      path.join(__dirname, "text", "promiseWrite.txt"),
      path.join(__dirname, "text", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "text", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "text", "text.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "text", "reply.txt"),
//   "Si Jhonnel lang ang Pogi",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//       path.join(__dirname, "text", "reply.txt"),
//       "\n\n Yan po ay totoo!",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "text", "reply.txt"),
//           path.join(__dirname, "text", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );
