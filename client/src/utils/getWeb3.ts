import Web3 from 'web3';

const getWeb3 = () => new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    (window as any).addEventListener('load', async () => {
        // Modern dapp browsers...
        if ((window as any).ethereum) {
            const web3 = new Web3((window as any).ethereum);
            try {
                // Request account access if needed
                await (window as any).ethereum.enable();
                // Acccounts now exposed
                resolve(web3);
            } catch (error) {
                reject(error);
            }
        }
    });
});

export default getWeb3;
