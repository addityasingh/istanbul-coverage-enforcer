#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const { enforce } = require('./src/enforce-coverage');

program
    .version('1.0.1', '-v, --version')
    .description('Enforce code coverage above a threshold');

const parseAndTrim = (str) => `${str}`.trim();

program
    .command('enforce')
    .option('-c, --coverage-path', 'The path to coverage JSON file')
    .option('-t, --threshold-path', 'The path to the threshold JSON file')
    .action((coverage, threshold) => {
        try {
            enforce(parseAndTrim(coverage), parseAndTrim(threshold));            
            console.log(`[SUCCESS]: Coverage above threshold`.green);
        } catch (e) {
            console.log(`${e.message}`.red)
        }
    });

program.parse(process.argv);