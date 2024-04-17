const fs = require("node:fs/promises");


const oldPath = "renameFile.txt";
const newPath = "newRenameFile.txt";

fs.rename(oldPath, newPath, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('Done');
    }
})