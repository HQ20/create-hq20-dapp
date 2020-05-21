const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        ...tsjPreset.transform,
    },
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!./node_modules/",
        "!src/*.{ts,tsx}"
    ],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
            diagnostics: true
        },
        NODE_ENV: "test"
    },
    // moduleNameMapper: {
    //     "helpers/(.*)$": "<rootDir>/src/helpers/$1",
    // },
}
