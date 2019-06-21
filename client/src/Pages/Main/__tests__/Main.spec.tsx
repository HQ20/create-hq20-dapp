/* globals describe test jest expect */
import delay from 'delay';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

// eslint-disable-next-line no-unused-vars
import getWeb3 from '../../../utils/getWeb3';
import Main from '../Main';


configure({ adapter: new Adapter() });
// the following line will instruct Jest
// to use the mock class instead of the real one
jest.mock('../../../utils/getWeb3');
// some basic tests
/**
 * Define class interface
 */
interface IMainState {
    storageValue: number;
    web3: any;
    accounts: string[];
    contract: any;
}
describe('Basic tests to Main Component', () => {
    let mainWrapper: ReactWrapper<{}, IMainState>;
    beforeAll(() => {
        // instantiate component
        mainWrapper = mount(<Main />);
    });

    test('web3 gets defined', async () => {
        let leftTries = 5;
        // wait until list actions is fulfiled
        do {
            // eslint-disable-next-line no-await-in-loop
            await delay(3000);
            mainWrapper.update();
            leftTries -= 1;
        } while (mainWrapper.state().web3 !== undefined && leftTries >= 0);
        expect(mainWrapper.state().web3).not.toBe(undefined);
    }, 20000);

    test('Should list actions', async () => {
        let leftTries = 5;
        // in order up update the state we need to mount again
        mainWrapper = mount(<Main />);
        // wait until list actions is fulfiled
        do {
            // eslint-disable-next-line no-await-in-loop
            await delay(3000);
            mainWrapper.update();
            leftTries -= 1;
        } while (mainWrapper.state().storageValue === 5 && leftTries >= 0);
        expect(mainWrapper.state().storageValue).toBe(5);
    }, 20000);
});
