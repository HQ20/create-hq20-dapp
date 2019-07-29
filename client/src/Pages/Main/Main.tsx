import React, { Component } from 'react';
import truffleContract from 'truffle-contract';
import SimpleStorageContract from '../../contracts/SimpleStorage.json';
import getWeb3 from '../../utils/getWeb3';

interface IMainState {
    storageValue: number;
    web3: any;
    accounts: string[];
    contract: any;
}
/**
 * This is App.
 */
class Main extends Component<{}, IMainState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        /**
         * @type {Object}
         * @property {number} state.storageValue - this is the value stored
         * @property {object} state.web3 - this is the web3 object
         * @property {string[]} state.accounts - this is an array of accounts
         * @property {object} state.contract - this is the contract object
         */
        this.state = {
            accounts: undefined as any,
            contract: undefined as any,
            storageValue: 0,
            web3: undefined as any,
        };
    }

    /**
     * @ignore
     */
    public async componentDidMount() {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3() as any;

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const Contract = truffleContract(SimpleStorageContract);
            Contract.setProvider(web3.currentProvider);
            const instance = await Contract.deployed();

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance }, this.runExample);
        } catch (error) {
            // Catch any errors for any of the above operations.
            console.log('Failed to load web3, accounts, or contract. Check console for details.');
            console.log(error);
        }
    }

    /**
     * this is an entry method to load info.
     */
    public async runExample() {
        const { accounts, contract } = this.state;

        // Stores a given value, 5 by default.
        await contract.set(5, { from: accounts[0] });

        // Get the value from the contract to prove it worked.
        const response = await contract.get();

        // Update state with the result.
        this.setState({ storageValue: response.toNumber() });
    }

    /**
     * @ignore
     */
    public render() {
        const { web3, storageValue } = this.state;
        if (!web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div className="App">
                <h1>Good to Go!</h1>
                <p>Your Truffle Box is installed and ready.</p>
                <h2>Smart Contract Example</h2>
                <p>
                    If your contracts compiled and migrated successfully, below will show
                    a stored value of 5 (by default).
                </p>
                <p>
                    Try changing the value stored on
                    {' '}
                    <strong>line 37</strong>
                    {' '}
                    of App.js.
                </p>
                <div>
                    The stored value is:
                    {' '}
                    {storageValue}
                </div>
            </div>
        );
    }
}

export default Main;
