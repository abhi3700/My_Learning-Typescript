# Project: Hello with Unit tests

## Packages
* `ts-node`: for Mocha & Jasmine
* `ts-jest`: for Jest
* `nyc`: code coverage

## File system
* `src/`: contains JS/TS files
* `tests/`: contains tests TS files
* `package.json`: present in root of project. This is created with `npm init`

## Installation
* `npm i -D chai mocha nyc ts-node typescript` creates a `package.json` file in the root directory:
```json
{
  "devDependencies": {
    "chai": "^4.3.4",
    "mocha": "^9.1.3",
    "nyc": "^15.1.0",
    "ts-node": "^10.3.1",
    "typescript": "^4.4.4"
  }
}
```
* `npm i -D @types/chai @types/mocha` modifies `package.json` in the root directory:
```json
{
  "devDependencies": {
    "@types/chai": "^4.2.22",
    "@types/mocha": "^9.0.0",
    "chai": "^4.3.4",
    "mocha": "^9.1.3",
    "nyc": "^15.1.0",
    "ts-node": "^10.3.1",
    "typescript": "^4.4.4"
  }
}
```

## Scripts
* The script to run the test is put inside `package.json`:
```json
  "scripts": {
    "test": "mocha -r ts-node/register tests/**/*.test.ts",
    "coverage": "nyc -r text -e .ts -x \"tests/*.test.ts\" npm run test"
  }
```

## Getting Started
1. Run this command on terminal: `sh install.sh` in the root directory of project.
2. Run test with `npm run test` or `npm t` in the root directory