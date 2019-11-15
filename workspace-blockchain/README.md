# workspace-blockchain

:herb: This is the blockchain workspaces dapp :octocat: All you need in a nut:shell:

This template is based on a truffle project structure, having the **contracts**, **migrations** and **test** folder as usual, as well as the **truffle-config.js** file. Besides that, this template is packed with an example smart contract with examples of a test including coverage. It also contains linters for typescript and solidity, plus a script to run tests.

## Installation

Use [yarn](https://yarnpkg.com) to install dependencies.

```bash
$ npm install
# or
$ yarn
```

## Usage

The package.json file contains a set of npm scripts to help on the development phase. Below is a short description for each
* **"deploy:ganache"** deploy the contracts on development network
* **"start:ganache:local"** start a ganache instance, which starts a db when first used
* **"start:geth:local"** start a geth instance, which starts a db when first used
* **"test"** run tests locally
* **"test:ci"** run tests in CI system
* **"coverage"** run coverage locally
* **"coverage:ci"** run coverage in CI system
* **"lint:sol"** lint solidity code according to rules
* **"lint:js"** lint javascript code according to rules
* **"lint"** lint solidity and javascript code
* **"security"** run security validation using mythril
* **"docs"** generates documentation based in your comments in solidity code

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](LICENSE)
