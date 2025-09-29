const fs = require("fs");
const Papa = require("papaparse");

const csv = fs.readFileSync("guests.csv", "utf8");
const result = Papa.parse(csv, {
  header: true,
  skipEmptyLines: true
});

fs.writeFileSync("guests.json", JSON.stringify(result.data, null, 2), "utf8");
console.log("✅ Conversion terminée : guests.json généré");
