const fs = require("fs");

const outputPath = process.argv[2];
const filePrefix = process.argv[3];
const rangeStart = process.argv[4];
const rangeEnd = process.argv[5];

for (let i = rangeStart; i <= rangeEnd; i++) {
  const fileName = `${outputPath}/${filePrefix}_${i}.md`;
  fs.open(fileName, "w", () => null);
}
