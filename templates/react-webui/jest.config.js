const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    // preset: 'ts-jest',
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // // roots: ['<rootDir>/src'],
    // // transform: {
    // //     ...tsjPreset.transform,
    // //     // [...]
    // // },
    // // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    // // collectCoverageFrom: [
    // //     "src/**/*.{ts,tsx}",
    // //     "!./node_modules/",
    // //     "!src/App.tsx",
    // //     "!src/*.{ts,tsx}",
    // //     "!src/utils/**.ts"
    // // ],
    // moduleNameMapper: {
    //     "helpers/(.*)$": [
    //         "<rootDir>/src/helpers/$1",
    //     ]
    // }

    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
            diagnostics: true
        },
        NODE_ENV: "test"
    },
}
