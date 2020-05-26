import { should } from 'chai';
import { UpgradableStorageInstance } from '../types/truffle-contracts';

const UpgradableStorage: Truffle.Contract<UpgradableStorageInstance> = artifacts.require('UpgradableStorage');
should();

/** @test {UpgradableStorage} contract */
contract('UpgradableStorage', (accounts) => {
    let upgradableStorageInstance: UpgradableStorageInstance;

    beforeEach(async () => {
        upgradableStorageInstance = await UpgradableStorage.new() as UpgradableStorageInstance;
        await upgradableStorageInstance.setup(6);
    });

    /**
     * Test the two contract methods
     * @test {UpgradableStorage#set} and {UpgradableStorage#get}
     */
    it('...should store the value 89.', async () => {
        ((await upgradableStorageInstance.get()).toString()).should.be.equal('6');

        // Set value of 89
        await upgradableStorageInstance.set(89, { from: accounts[0] });

        // Get stored value
        ((await upgradableStorageInstance.get()).toString()).should.be.equal('89');
    });
});
