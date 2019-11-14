import * as chai from 'chai';
import { UpgradableStorageInstance } from '../types/truffle-contracts';

const UpgradableStorage = artifacts.require('UpgradableStorage') as Truffle.Contract<UpgradableStorageInstance>;
chai.should();

/** @test {UpgradableStorage} contract */
contract('UpgradableStorage', (accounts) => {
    let upgradableStorageInstance: any;

    beforeEach(async () => {
        upgradableStorageInstance = await UpgradableStorage.new();
        upgradableStorageInstance.setup(6);
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

// you need it, better trust me!
export {};
