// const fs = require("node:fs");

// fs.readFile("read.txt", {encoding: "utf-8"}, (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// })


//Promise 

const fs = require("node:fs/promises");

console.log("Start");

fs.readFile("read.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((err) => {
    throw err;
  });