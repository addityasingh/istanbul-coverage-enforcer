# istanbul-coverage-enforcer
A Nodejs package and cli tool to enforce code coverage

[![NPM](https://nodei.co/npm/istanbul-coverage-enforcer.png)](https://npmjs.org/package/istanbul-coverage-enforcer)

## Build status
[![Build Status](https://travis-ci.org/addityasingh/istanbul-coverage-enforcer.svg?branch=master)](https://travis-ci.org/addityasingh/istanbul-coverage-enforcer)
[![coverage](https://codecov.io/github/addityasingh/istanbul-coverage-enforcer/coverage.svg?precision=0)](https://codecov.io/github/addityasingh/istanbul-coverage-enforcer)

## npm status
[![downloads](https://img.shields.io/npm/dt/istanbul-coverage-enforcer.svg)](https://npmjs.org/package/istanbul-coverage-enforcer)
[![version](https://img.shields.io/npm/v/istanbul-coverage-enforcer.svg)](https://npmjs.org/package/istanbul-coverage-enforcer)


### The problem
Most of the coverage tools available do not provide an option to enforce the coverage and stop the build in case the coverage threshold is not met

### Solution: 
A small node package to enforce coverage as based on threshold

# Installation
Use it with `npm` as

```
npm install istanbul-coverage-enforcer
```

or with yarn as 

```
yarn add istanbul-coverage-enforcer
```

# Prerequisite
istanbul stable (`0.4.5` or below) is needed to get the correct format of the `coverage.json`

# Usage
You can use the istanbul-coverage-enforcer both as a node package and as a CLI tool

#### As a CLI tool:
These are the options available currently with the CLI tool

```
enforce --help

  Usage: enforce [options]


  Options:

    -c, --coverage-path   The path to coverage JSON file
    -t, --threshold-path  The path to the threshold JSON file
    -h, --help            output usage information
```

1. Add a npm script in `package.json` to call the package with the path to the code-coverage file. By default this is at `coverage/coverage.json` 

```javascript
"enforce-coverage": "enforce -c coverage/coverage.json -t coverage-threshold.json",
```

2. Now you can run this script as part of your build to ensure that code coverage is maintained above threshold
```
npm run enforce-covergage
```
***Output***
![istanbul-enforce-success](https://raw.githubusercontent.com/additysingh/istanbul-coverage-enforcer/master/examples/cli/images/istanbul-enforce-success.png)
![istanbul-enforce-failure](https://raw.githubusercontent.com/additysingh/istanbul-coverage-enforcer/master/examples/cli/images/istanbul-enforce-failure.png)

#### As a node package
1. Create a `coverage-threshold.json` in the root of your project. Optionally this can be also passed as the second parameter to the function

2. In your script *import* and *call* the `enforce` function as below:
```
const enforce = require('../index');

enforce('./examples/packages/coverage.json', './examples/packages/coverage-threshold.json');
```

Refer the `examples`folder for basic use case examples as node package and cli

# Reference and Credits
