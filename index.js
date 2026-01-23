const fs = require('fs');
const csv = require('csv-parser');

// Input and output file paths
const INPUT_FILE = 'input_countries.csv';
const CANADA_FILE = 'canada.txt';
const USA_FILE = 'usa.txt';

// Delete existing output files if they exist
[CANADA_FILE, USA_FILE].forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`Deleted existing file: ${file}`);
    }
});

// Create write streams
const canadaStream = fs.createWriteStream(CANADA_FILE);
const usaStream = fs.createWriteStream(USA_FILE);

// Write headers
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

// Read CSV and filter data
fs.createReadStream(INPUT_FILE)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();

        if (country === 'canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}\n`);
        }

        if (country === 'united states') {
            usaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV processing complete.');
        canadaStream.end();
        usaStream.end();
    });