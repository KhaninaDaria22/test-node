const fs = require("node:fs/promises");

fs.writeFile("write.txt", "I LOVE NODE.JS")
    .then((data) => console.log(data))
    .catch((err) => {
        throw err;
    });