#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

mkdir -p scripts/build/solc/

solc @openzeppelin=$PWD/../workspace-blockchain/node_modules/@openzeppelin ../workspace-blockchain/contracts/SimpleStorage.sol --bin --abi --optimize -o scripts/build/solc/ --allow-paths / --overwrite

web3j solidity generate -b scripts/build/solc/SimpleStorage.bin -a scripts/build/solc/SimpleStorage.abi -o app/src/main/java/ -p io.techhq.myexample.contracts
