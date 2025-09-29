const fs = require("fs");
const path = require("path");

// Lecture du CSV
const csvFile = path.resolve("guests.csv");
const csv = fs.readFileSync(csvFile, "utf8");

// Gestion des retours Windows/Mac/Linux
const lines = csv.split(/\r?\n/).filter(l => l.trim() !== "");
const headers = lines[0].split(",");

// Conversion CSV → JSON
const data = lines.slice(1).map(line => {
  const values = line.split(",");
  let obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = values[i] ? values[i].trim() : "";
  });
  return obj;
});

// Sauvegarde en JSON
fs.writeFileSync("guests.json", JSON.stringify(data, null, 2), { encoding: "utf8" });

console.log("✅ Conversion terminée : guests.json généré");
