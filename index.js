// const enforce = require('./src/enforce-coverage');

// Accept input threshold file path
// Accept input coverage file path
// execute enforce and return result
// E.g. node index.js --coverage-path="./coverage.json" --threshold-path="threshold.json"

const regex = /^--coverage-path="[a-zA-Z]"$/i
process.argv.slice(2).forEach((val, index) => {
    console.log(`${index}: ${val}`);
    console.log(regex.exec(val));
});
