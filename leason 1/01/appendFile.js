const fs = require("node:fs/promises")


const str = 'I love Paris';

fs.appendFile("appendFile.txt", str)
    .then((data) => console.log({data}))
    .catch((err) => {
        throw err;
    }); 

    