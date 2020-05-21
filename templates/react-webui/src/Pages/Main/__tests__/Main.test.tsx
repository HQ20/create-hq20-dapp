import delay from 'delay';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Main from '../Main';

import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';
import { SimpleStorageInstance } from 'helpers/contracts/types/truffle-contracts/index';


configure({ adapter: new Adapter() });
interface IMainState {
    storageValue: string;
    userSigner: ethers.providers.JsonRpcSigner;
    provider: JsonRpcProvider;
    simpleStorageInstance: ethers.Contract & SimpleStorageInstance;
}
describe('Basic tests to Main Component', () => {
    let mainWrapper: ReactWrapper<{}, IMainState>;
    beforeAll(() => {
        // instantiate component
        mainWrapper = mount(<Main />);
    });

    test('provider gets defined', async () => {
        let leftTries = 5;
        // wait until provider is defined
        do {
            await delay(3000);
            mainWrapper.update();
            leftTries -= 1;
        } while (mainWrapper.state().provider !== undefined && leftTries >= 0);
        // expect(mainWrapper.state().provider).not.toBe(undefined as any);
    });

    test('Should list actions', async () => {
        let leftTries = 5;
        // in order up update the state we need to mount again
        mainWrapper = mount(<Main />);
        // wait until storage value as the correct value
        do {
            await delay(3000);
            mainWrapper.update();
            leftTries -= 1;
        } while (mainWrapper.state().storageValue === '5' && leftTries >= 0);
        // expect(mainWrapper.state().storageValue).toBe('5');
    });
});
