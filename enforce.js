#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const { readParsedJSON } = require('./src/utils');
const { enforce } = require('./src/enforce-coverage');

program
    .version('1.0.1', '-v, --version')
    .description('Enforce code coverage above a threshold');

const parseAndTrim = (str) => `${str}`.trim();

program
    .option('-c, --coverage-path <coverage>', 'The path to coverage JSON file')
    .option('-t, --threshold-path <threshold>', 'The path to the threshold JSON file')
    .parse(process.argv);

try {
    enforce(parseAndTrim(program.coveragePath), parseAndTrim(program.thresholdPath));            
    console.log(`[SUCCESS]: Coverage above threshold`.green);
} catch (e) {
    console.log(`${e.message}`.red)
    process.exitCode = 1;
} finally {
    const { global: thresholdGlobal = {} } = readParsedJSON(program.thresholdPath)
    console.log(`
=============================== Coverage thresholds ===============================
Statements : ${thresholdGlobal.statements}%
Branches : ${thresholdGlobal.branches}%
Functions : ${thresholdGlobal.functions}%
Lines : ${thresholdGlobal.lines}%
================================================================================
    `.yellow);
}

