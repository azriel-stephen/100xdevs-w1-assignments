// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

const fileData = fs.readFileSync(
  "file.txt",
  { encoding: "utf-8" },
  (err, data) => {
    if (err) throw err;
    return data;
  }
);
const removeExtraSpaces = (string) =>
  string
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");

const words = removeExtraSpaces(fileData);
console.log(words);
