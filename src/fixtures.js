const mockCoverageResult = [
  {
    type: 'lines',
    global: {
      failed: false,
      value: 64.52,
    },
    each: {
      failed: true,
      failures: [
        '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js',
      ],
    },
  },
  {
    type: 'statements',
    global: {
      failed: false,
      value: 64.52,
    },
    each: {
      failed: false,
      failures: [],
    },
  },
  {
    type: 'functions',
    global: {
      failed: false,
      value: -2,
    },
    each: {
      failed: true,
      failures: [
        '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js',
      ],
    },
  },
  {
    type: 'branches',
    global: {
      failed: false,
      value: 50,
    },
    each: {
      failed: false,
      failures: [],
    },
  },
];

const mockCoverage = {
  '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js': {
    path:
      '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/worker/worker-client.js',
    s: {
      '1': 1,
      '2': 0,
      '3': 0,
      '4': 1,
      '5': 0,
      '6': 0,
      '7': 1,
    },
    b: {
      '1': [0, 0],
      '2': [0, 0],
    },
    f: {
      '1': 0,
      '2': 0,
    },
    fnMap: {
      '1': {
        name: 'sendMetric',
        line: 1,
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 26,
          },
        },
      },
      '2': {
        name: 'sendLog',
        line: 10,
        loc: {
          start: {
            line: 10,
            column: 0,
          },
          end: {
            line: 10,
            column: 23,
          },
        },
      },
    },
    statementMap: {
      '1': {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 8,
          column: 1,
        },
      },
      '2': {
        start: {
          line: 2,
          column: 4,
        },
        end: {
          line: 7,
          column: 5,
        },
      },
      '3': {
        start: {
          line: 3,
          column: 8,
        },
        end: {
          line: 6,
          column: 11,
        },
      },
      '4': {
        start: {
          line: 10,
          column: 0,
        },
        end: {
          line: 17,
          column: 1,
        },
      },
      '5': {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 16,
          column: 5,
        },
      },
      '6': {
        start: {
          line: 12,
          column: 8,
        },
        end: {
          line: 15,
          column: 11,
        },
      },
      '7': {
        start: {
          line: 19,
          column: 0,
        },
        end: {
          line: 22,
          column: 2,
        },
      },
    },
    branchMap: {
      '1': {
        line: 2,
        type: 'if',
        locations: [
          {
            start: {
              line: 2,
              column: 4,
            },
            end: {
              line: 2,
              column: 4,
            },
          },
          {
            start: {
              line: 2,
              column: 4,
            },
            end: {
              line: 2,
              column: 4,
            },
          },
        ],
      },
      '2': {
        line: 11,
        type: 'if',
        locations: [
          {
            start: {
              line: 11,
              column: 4,
            },
            end: {
              line: 11,
              column: 4,
            },
          },
          {
            start: {
              line: 11,
              column: 4,
            },
            end: {
              line: 11,
              column: 4,
            },
          },
        ],
      },
    },
  },
  '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/support/deep-merge.js': {
    path:
      '/Users/adisingh/Documents/dev/zalando/vegas/pdp-aggregator/src/support/deep-merge.js',
    s: {
      '1': 1,
      '2': 8,
      '3': 1,
      '4': 4,
      '5': 0,
      '6': 4,
      '7': 0,
      '8': 4,
      '9': 0,
      '10': 4,
      '11': 0,
      '12': 4,
      '13': 4,
      '14': 16,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 16,
      '19': 16,
      '20': 4,
      '21': 3,
      '22': 3,
      '23': 4,
      '24': 1,
    },
    b: {
      '1': [8, 8],
      '2': [0, 4],
      '3': [4, 4],
      '4': [0, 4],
      '5': [4, 0],
      '6': [0, 4],
      '7': [4, 4],
      '8': [0, 4],
      '9': [4, 0],
      '10': [0, 16],
      '11': [16, 0],
      '12': [0, 0],
      '13': [0, 0],
      '14': [16, 0],
      '15': [3, 0],
      '16': [3, 3],
    },
    f: {},
    fnMap: {},
    statementMap: {
      '1': {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 2,
          column: 51,
        },
      },
      '2': {
        start: {
          line: 2,
          column: 4,
        },
        end: {
          line: 2,
          column: 50,
        },
      },
      '3': {
        start: {
          line: 4,
          column: 0,
        },
        end: {
          line: 35,
          column: 2,
        },
      },
      '4': {
        start: {
          line: 5,
          column: 4,
        },
        end: {
          line: 7,
          column: 5,
        },
      },
      '5': {
        start: {
          line: 6,
          column: 8,
        },
        end: {
          line: 6,
          column: 20,
        },
      },
      '6': {
        start: {
          line: 9,
          column: 4,
        },
        end: {
          line: 15,
          column: 5,
        },
      },
      '7': {
        start: {
          line: 10,
          column: 8,
        },
        end: {
          line: 10,
          column: 20,
        },
      },
      '8': {
        start: {
          line: 11,
          column: 11,
        },
        end: {
          line: 15,
          column: 5,
        },
      },
      '9': {
        start: {
          line: 12,
          column: 8,
        },
        end: {
          line: 12,
          column: 20,
        },
      },
      '10': {
        start: {
          line: 13,
          column: 11,
        },
        end: {
          line: 15,
          column: 5,
        },
      },
      '11': {
        start: {
          line: 14,
          column: 8,
        },
        end: {
          line: 14,
          column: 18,
        },
      },
      '12': {
        start: {
          line: 17,
          column: 4,
        },
        end: {
          line: 17,
          column: 22,
        },
      },
      '13': {
        start: {
          line: 18,
          column: 4,
        },
        end: {
          line: 28,
          column: 5,
        },
      },
      '14': {
        start: {
          line: 19,
          column: 8,
        },
        end: {
          line: 27,
          column: 9,
        },
      },
      '15': {
        start: {
          line: 20,
          column: 12,
        },
        end: {
          line: 24,
          column: 13,
        },
      },
      '16': {
        start: {
          line: 21,
          column: 16,
        },
        end: {
          line: 21,
          column: 65,
        },
      },
      '17': {
        start: {
          line: 23,
          column: 16,
        },
        end: {
          line: 23,
          column: 42,
        },
      },
      '18': {
        start: {
          line: 25,
          column: 15,
        },
        end: {
          line: 27,
          column: 9,
        },
      },
      '19': {
        start: {
          line: 26,
          column: 12,
        },
        end: {
          line: 26,
          column: 38,
        },
      },
      '20': {
        start: {
          line: 29,
          column: 4,
        },
        end: {
          line: 33,
          column: 5,
        },
      },
      '21': {
        start: {
          line: 30,
          column: 8,
        },
        end: {
          line: 32,
          column: 9,
        },
      },
      '22': {
        start: {
          line: 31,
          column: 12,
        },
        end: {
          line: 31,
          column: 38,
        },
      },
      '23': {
        start: {
          line: 34,
          column: 4,
        },
        end: {
          line: 34,
          column: 18,
        },
      },
      '24': {
        start: {
          line: 37,
          column: 0,
        },
        end: {
          line: 37,
          column: 27,
        },
      },
    },
    branchMap: {
      '1': {
        line: 2,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 2,
              column: 4,
            },
            end: {
              line: 2,
              column: 23,
            },
          },
          {
            start: {
              line: 2,
              column: 27,
            },
            end: {
              line: 2,
              column: 50,
            },
          },
        ],
      },
      '2': {
        line: 5,
        type: 'if',
        locations: [
          {
            start: {
              line: 5,
              column: 4,
            },
            end: {
              line: 5,
              column: 4,
            },
          },
          {
            start: {
              line: 5,
              column: 4,
            },
            end: {
              line: 5,
              column: 4,
            },
          },
        ],
      },
      '3': {
        line: 5,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 5,
              column: 8,
            },
            end: {
              line: 5,
              column: 28,
            },
          },
          {
            start: {
              line: 5,
              column: 32,
            },
            end: {
              line: 5,
              column: 52,
            },
          },
        ],
      },
      '4': {
        line: 9,
        type: 'if',
        locations: [
          {
            start: {
              line: 9,
              column: 4,
            },
            end: {
              line: 9,
              column: 4,
            },
          },
          {
            start: {
              line: 9,
              column: 4,
            },
            end: {
              line: 9,
              column: 4,
            },
          },
        ],
      },
      '5': {
        line: 9,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 9,
              column: 8,
            },
            end: {
              line: 9,
              column: 13,
            },
          },
          {
            start: {
              line: 9,
              column: 17,
            },
            end: {
              line: 9,
              column: 21,
            },
          },
        ],
      },
      '6': {
        line: 11,
        type: 'if',
        locations: [
          {
            start: {
              line: 11,
              column: 11,
            },
            end: {
              line: 11,
              column: 11,
            },
          },
          {
            start: {
              line: 11,
              column: 11,
            },
            end: {
              line: 11,
              column: 11,
            },
          },
        ],
      },
      '7': {
        line: 11,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 15,
            },
            end: {
              line: 11,
              column: 19,
            },
          },
          {
            start: {
              line: 11,
              column: 23,
            },
            end: {
              line: 11,
              column: 28,
            },
          },
        ],
      },
      '8': {
        line: 13,
        type: 'if',
        locations: [
          {
            start: {
              line: 13,
              column: 11,
            },
            end: {
              line: 13,
              column: 11,
            },
          },
          {
            start: {
              line: 13,
              column: 11,
            },
            end: {
              line: 13,
              column: 11,
            },
          },
        ],
      },
      '9': {
        line: 13,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 15,
            },
            end: {
              line: 13,
              column: 20,
            },
          },
          {
            start: {
              line: 13,
              column: 24,
            },
            end: {
              line: 13,
              column: 29,
            },
          },
        ],
      },
      '10': {
        line: 19,
        type: 'if',
        locations: [
          {
            start: {
              line: 19,
              column: 8,
            },
            end: {
              line: 19,
              column: 8,
            },
          },
          {
            start: {
              line: 19,
              column: 8,
            },
            end: {
              line: 19,
              column: 8,
            },
          },
        ],
      },
      '11': {
        line: 19,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 12,
            },
            end: {
              line: 19,
              column: 60,
            },
          },
          {
            start: {
              line: 19,
              column: 64,
            },
            end: {
              line: 19,
              column: 112,
            },
          },
        ],
      },
      '12': {
        line: 20,
        type: 'if',
        locations: [
          {
            start: {
              line: 20,
              column: 12,
            },
            end: {
              line: 20,
              column: 12,
            },
          },
          {
            start: {
              line: 20,
              column: 12,
            },
            end: {
              line: 20,
              column: 12,
            },
          },
        ],
      },
      '13': {
        line: 20,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 20,
              column: 16,
            },
            end: {
              line: 20,
              column: 41,
            },
          },
          {
            start: {
              line: 20,
              column: 45,
            },
            end: {
              line: 20,
              column: 70,
            },
          },
        ],
      },
      '14': {
        line: 25,
        type: 'if',
        locations: [
          {
            start: {
              line: 25,
              column: 15,
            },
            end: {
              line: 25,
              column: 15,
            },
          },
          {
            start: {
              line: 25,
              column: 15,
            },
            end: {
              line: 25,
              column: 15,
            },
          },
        ],
      },
      '15': {
        line: 30,
        type: 'if',
        locations: [
          {
            start: {
              line: 30,
              column: 8,
            },
            end: {
              line: 30,
              column: 8,
            },
          },
          {
            start: {
              line: 30,
              column: 8,
            },
            end: {
              line: 30,
              column: 8,
            },
          },
        ],
      },
      '16': {
        line: 30,
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 30,
              column: 12,
            },
            end: {
              line: 30,
              column: 27,
            },
          },
          {
            start: {
              line: 30,
              column: 31,
            },
            end: {
              line: 30,
              column: 79,
            },
          },
        ],
      },
    },
  },
};

const mockFailureThreshold = {
  global: {
    statements: 67.52,
    branches: 50,
    lines: 67.52,
    functions: -2,
  },
  each: {},
};

const mockSuccessThreshold = {
  global: {
    statements: 64.52,
    branches: 50,
    lines: 64.52,
    functions: -2,
  },
  each: {},
};

module.exports = {
  mockCoverage,
  mockCoverageResult,
  mockFailureThreshold,
  mockSuccessThreshold,
};
