import { ContractTransaction, ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';
import React, { Component } from 'react';

// TODO: temporary fix
import Network from '../../helpers/contracts/network.json';
// TODO: temporary fix
import SimpleStorageABI from '../../helpers/contracts/SimpleStorageABI.json';
import { SimpleStorageInstance } from 'helpers/contracts/types/truffle-contracts/index';

interface IMainState {
    storageValue: string;
    inputStorageValue: string;
    userSigner: ethers.providers.JsonRpcSigner;
    provider: JsonRpcProvider;
    simpleStorageInstance: ethers.Contract & SimpleStorageInstance;
    miningTransaction: boolean;
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
         * @property {string} state.storageValue - this is the value stored
         * @property {JsonRpcProvider} state.provider - this is the web3 provider
         * @property {ethers.providers.JsonRpcSigner} state.userSigner - this is the user account
         * @property {SimpleStorageInstance} state.simpleStorageInstance - this is the contract object
         * @property {string} state.inputStorageValue - variable to controled input
         * @property {boolean} state.miningTransaction - variable to mining message
         */
        this.state = {
            inputStorageValue: '',
            miningTransaction: false,
            provider: undefined as any,
            simpleStorageInstance: undefined as any,
            storageValue: '',
            userSigner: undefined as any,
        };
    }

    /**
     * @ignore
     */
    public async componentDidMount() {
        const url = 'http://localhost:8545';
        const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        // const network = await customHttpProvider.getNetwork();
        const simpleStorageInstance = new ethers.Contract(
            // TODO: improve next line
            Network.development.SimpleStorage,
            SimpleStorageABI,
            customHttpProvider,
        ) as ethers.Contract & SimpleStorageInstance;

        const userSigner = customHttpProvider.getSigner(0);
        const storageValue = (await simpleStorageInstance.get()).toString();

        // Set provider and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({ provider: customHttpProvider, simpleStorageInstance, userSigner, storageValue });
    }

    /**
     * handle input changes.
     */
    public handleChangeInputStorageValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputStorageValue: event.target.value });
    }

    /**
     * submit input changes
     */
    public handleSubmitInputStorageValue = (event: React.FormEvent<HTMLFormElement>) => {
        const { simpleStorageInstance, inputStorageValue, userSigner } = this.state;

        // Create a new instance of the Contract with a Signer, which allows
        // update methods
        const simpleStorageInstanceWithSigner = simpleStorageInstance.connect(userSigner);


        simpleStorageInstanceWithSigner.set(inputStorageValue).then(async (tx: ContractTransaction) => {
            this.setState({ miningTransaction: true });
            // The operation is NOT complete yet; we must wait until it is mined
            await tx.wait();

            // Call the Contract's getValue() method again
            const newValue = (await simpleStorageInstance.get()).toString();
            this.setState({ inputStorageValue: '', storageValue: newValue, miningTransaction: false });
        });
        event.preventDefault();
    }

    /**
     * @ignore
     */
    public render() {
        const { provider, storageValue, inputStorageValue, miningTransaction } = this.state;
        if (!provider) {
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
                <div style={{visibility: miningTransaction ? 'visible' : 'hidden'}}>Mining...</div>
            </div>
        );
    }
}

export default Main;
