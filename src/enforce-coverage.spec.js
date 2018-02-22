const {
    convertResultToThreshold
} = require('./enforce-coverage');

const {
    mockCoverageResult,
    mockCoverageThreshold
} = require('./fixtures');


test('converts coverage result to coverage threshold', () => {
    expect(convertResultToThreshold(mockCoverageResult))
        .toEqual(mockCoverageThreshold);
});