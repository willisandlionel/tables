const fs = require("fs");
const parse = require("csv-parse/lib/sync");

// Lire le CSV
const csv = fs.readFileSync("guests.csv", "utf8");

// Parser correctement le CSV
const records = parse(csv, {
  columns: true,    // prend la première ligne comme en-têtes
  skip_empty_lines: true
});

// Sauver en JSON
fs.writeFileSync("guests.json", JSON.stringify(records, null, 2), "utf8");

console.log("✅ Conversion terminée : guests.json généré");
