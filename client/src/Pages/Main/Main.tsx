import { fromConnection, fromInjected } from '@openzeppelin/network';
import React, { Component } from 'react';
import truffleContract from 'truffle-contract';
import SimpleStorageContract from '../../contracts/SimpleStorage.json';

interface IMainState {
    storageValue: number;
    inputStorageValue: string;
    loggedIn: boolean;
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
         * @property {object} state.inputStorageValue - variable to controled input
         * @property {object} state.loggedIn - save user's state
         */
        this.state = {
            accounts: undefined as any,
            contract: undefined as any,
            inputStorageValue: '',
            loggedIn: false,
            storageValue: 0,
            web3: undefined as any,
        };
    }

    /**
     * @ignore
     */
    public async componentDidMount() {
        const local = await fromConnection('http://127.0.0.1:8545');

        // Get the contract instance.
        const Contract = truffleContract(SimpleStorageContract);
        Contract.setProvider(local.lib.currentProvider);
        const instance = await Contract.deployed();

        const storageValue = (await instance.get()).toNumber();

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({ web3: local.lib, contract: instance, storageValue });
    }

    /**
     * handle input changes.
     */
    public handleChangeInputStorageValue = (event: any) => {
        this.setState({ inputStorageValue: event.target.value });
    }

    /**
     * submit input changes
     */
    public handleSubmitInputStorageValue = (event: any) => {
        new Promise<
            { loggedIn: boolean, accounts: string[], contract: any, web3: any }
        >(async (resolve: any, reject: any) => {
            let web3;
            let { accounts, contract } = this.state;
            const { loggedIn, inputStorageValue } = this.state;

            if (!loggedIn) {
                try {
                    const injected = await fromInjected();
                    // Get network provider and web3 instance.

                    web3 = injected.lib;
                    // Use web3 to get the user's accounts.
                    accounts = await web3.eth.getAccounts();

                    // Get the contract instance.
                    const Contract = truffleContract(SimpleStorageContract);
                    Contract.setProvider(web3.currentProvider);
                    contract = await Contract.deployed();
                } catch (error) {
                    // Catch any errors for any of the above operations.
                    console.log('Failed to load web3, accounts, or contract. Check console for details.');
                    console.log(error);
                }
            }
            // Stores a given value, 5 by default.
            await contract.set(inputStorageValue, { from: accounts[0] });
            //
            resolve({ loggedIn, accounts, contract, web3 });
        }).then(({ loggedIn, accounts, contract, web3 }) => {
            // Update state with the result.
            const { inputStorageValue } = this.state;
            if (!loggedIn) {
                this.setState({
                    accounts,
                    contract,
                    inputStorageValue: '',
                    loggedIn: true,
                    storageValue: parseInt(inputStorageValue, 10),
                    web3,
                });
            }
        });
        event.preventDefault();
    }

    /**
     * @ignore
     */
    public render() {
        const { web3, storageValue, inputStorageValue } = this.state;
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
                <form onSubmit={this.handleSubmitInputStorageValue}>
                    <input type="text" value={inputStorageValue} onChange={this.handleChangeInputStorageValue} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Main;
