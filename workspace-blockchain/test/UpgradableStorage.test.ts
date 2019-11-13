import { UpgradableStorageInstance } from '../types/truffle-contracts';
import * as chai from 'chai';

const UpgradableStorage = artifacts.require('UpgradableStorage') as Truffle.Contract<UpgradableStorageInstance>;
chai.should();

/** @test {UpgradableStorage} contract */
contract('UpgradableStorage', (accounts) => {
    let UpgradableStorageInstance: any;

    beforeEach(async () => {
        UpgradableStorageInstance = await UpgradableStorage.new();
        UpgradableStorageInstance.setup(6);
    });

    /**
     * Test the two contract methods
     * @test {UpgradableStorage#set} and {UpgradableStorage#get}
     */
    it('...should store the value 89.', async () => {
        ((await UpgradableStorageInstance.get()).toString()).should.be.equal('6');

        // Set value of 89
        await UpgradableStorageInstance.set(89, { from: accounts[0] });

        // Get stored value
        ((await UpgradableStorageInstance.get()).toString()).should.be.equal('89');
    });
});

// you need it, better trust me!
export {};
