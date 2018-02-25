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

# API

# Prerequisite
istanbul stable (`0.4.5` or below) is needed to get the correct format of the `coverage.json`

# Usage
You can use the istanbul-coverage-enforcer both as a node package and as a CLI tool
- As a CLI tool
- As a node package
1. Create a `coverage-threshold.json` in the root of your project
2. Add a npm script in `package.json` to call the package with the path to the code-coverage file. By default this is at `coverage/coverage.json` 

```javascript
"enforce-coverage": "node_modules/istanbul-coverage-enforcer coverage/coverage.json",
```
refer the `examples`folder for some basic use case examples

# Reference and Credits
