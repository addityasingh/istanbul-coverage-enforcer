const coverageResult = [{
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
}];

const coverageThreshold = {
    "global": {
        "statements": 64.52,
        "branches": 50,
        "lines": 64.52,
        "functions": -2
    },
    "each": {}
};

module.exports = {
    mockCoverageResult: coverageResult,
    mockCoverageThreshold: coverageThreshold,
};