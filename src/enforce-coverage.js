const coverageThreshold = require('./coverage-threshold.json');
const istanbul = require('istanbul');
const fs = require('fs');
const { exec } = require('child_process');
const checker = require('istanbul-threshold-checker');
const { compose } = require('./functional-utils.js');

const GLOBAL = 'global';
const EACH = 'each';

const collector = new istanbul.Collector();

const generateCoverage = () => {
    const { stdout, stderr } = exec(`npm run coverage`);
}

const convertResultToThreshold = (result) => {
    /*
    Syntax of Result
    [{
        "type":"lines",
        "global":{"failed":false,"value":64.52},
        "each":{"failed":true,"failures":["/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js"]}
    },
    {
        "type":"statements",
        "global":{"failed":false,"value":64.52},
        "each":{"failed":false,"failures":[]}
    },{
        "type":"functions",
        "global":{"failed":false,"value":-2},
        "each":{"failed":true,"failures":["/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js"]}
    },{
        "type":"branches",
        "global":{"failed":false,"value":50},
        "each":{"failed":false,"failures":[]}
    }]
    */

    /*
        Syntax of threshold
        {
            "global": {
                "statements": 65.5,
                "branches": 50,
                "lines": 64,
                "functions": -10
            },
            "each": {
                "statements": 0,
                "branches": -20,
                "lines": 60,
                "functions": 100
            }
        }
    */
    
    return result.reduce((acc, r) => {
        const globals = Object.assign({}, acc.global, {
            [r.type]: r.global.value
        });
        const each = Object.assign({}, acc.each, {
            [r.type]: r.each.value
        });

        return Object.assign({}, acc, {
            global: globals,
            each,
        });
    }, { "global": {}, "each": {} });
}

/**
 * 
 * @param {object} results 
 * @param {string} thresholdType OneOf(GLOBAL, EACH)
 */
const getCoverageStatus = (results) => 
    [results, results.reduce((pass = true, current) =>
        pass && !current[GLOBAL]['failed'])];

const updateCoverageThreshold = (currentCoverage) => fs.writeFileSync(
    'coverage-threshold.json', JSON.stringify(currentCoverage), { encoding: 'UTF-8' }
);

const checkAndUpdateCoverage = (results, pass) => {
    if (!pass) {
        process.nextTick(() => {
            console.error('[ERROR]: Coverage threshold fails');
            process.exit(1);
        })
    } else {
        compose(
            updateCoverageThreshold,
            convertResultToThreshold,
        )(results);
    }
}

compose(
    res => checkAndUpdateCoverage(...res),
    getCoverageStatus,
    checker.checkFailures.bind(null, coverageThreshold),
    () => collector.getFinalCoverage(),
    res => collector.add(res),
    JSON.parse,
    () => fs.readFileSync('./coverage/coverage.json', 'UTF8'),
    generateCoverage,
)();