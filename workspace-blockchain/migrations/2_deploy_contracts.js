const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const UpgradableStorage = artifacts.require('./UpgradableStorage.sol');

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(SimpleStorage);
    await deployer.ens.setAddress('simplestorage.eth', SimpleStorage.address, { from: accounts[0] })
    await deployer.deploy(UpgradableStorage);
}
