# workspace-blockchain

> :herb: This is the blockchain workspaces hq20-dapp :octocat: All you need in a nut:shell:

This template is based on a truffle project structure, having the **contracts**, **migrations** and **test** folder as usual, as well as the **truffle-config.js** file. Besides that, this template is packed with an example smart contract with examples of a test including coverage. It also contains linters for typescript and solidity, plus a script to run tests.

## Installation

Use [yarn](https://yarnpkg.com) to install dependencies.

```bash
$ yarn
```

## Usage

### Start a network

To deploy the contracts, a network is required. Using this workspace, you have the possibility to run a local network with `yarn start:ganache:local`.

### Deploy smart contracts

There are many ways to deploy the contracts. While using this workspace, we recomment to confugire the network in *truffle-config.js* and then deploy with truffle (eg. `npx truffle migrate --network <network name>`). If you are running a local network with `yarn start:ganache:local`, then you can deploy with `yarn deploy:ganache:local`.

### All available commands

The package.json file contains a set of npm scripts to help on the development phase. Below is a short description for each
* **"deploy:ganache:local"** deploy the contracts on development network
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
* **"docs"** generates documentation based in your comments in solidity code following the natspec standard

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](LICENSE)
