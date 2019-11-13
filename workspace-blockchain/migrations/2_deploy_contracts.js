const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const UpgradableStorage = artifacts.require('./UpgradableStorage.sol');

module.exports = async (deployer) => {
    await deployer.deploy(SimpleStorage);
    await deployer.deploy(UpgradableStorage);
}
