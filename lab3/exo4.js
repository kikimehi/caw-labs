
import fs from 'fs';

const fileName = process.argv[2];
const text = process.argv[3];

if (!fileName || !text) {
    console.error("Usage: node exo4.js <filename> <text>");
    process.exit(1);
}

fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing file: ${err.message}`);
        process.exit(1);
    }
    console.log("The file has been saved!");

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            process.exit(1);
        }
        console.log(data);
    });
});
