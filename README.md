<div align="center">
    <img style="" width="768" src="title.webp">
</div>

> A starter-kit in the format of a github template. Divided in four worskpaces from the basic setup for smart contracts development, a webui, cache server and an android app. This is great for every new project. Containing from tests, to coverage, documentation generators, linters, etc.

<div align="center">
    <div>
        <a
            href="https://travis-ci.org/HQ20/starter-kit"><img
                src="https://travis-ci.org/HQ20/starter-kit.svg?branch=master" /></a>&emsp;
        <a
            href="https://dependabot.com"><img
                src="https://api.dependabot.com/badges/status?host=github&repo=HQ20/contracts" /></a>&emsp;
    </div>
</div>

This template is a monorepo in which we have four workspaces. For each one of those workspaces we have the following:
- **workspace-blockchain** an example of a solidity smart contracts project
- **workspace-webui** using a *create-react-app* boilerplate with typescript and ethers.js connecting to a local network
- **workspace-android** a basic android app with web3j connecting to a local network
- **workspace-cache-server** a cache server built with express.js and postgresql database, lestening to and caching events.

## Usage
The projects is devided in workspaces and each workspace as it's own dependency manager, with examples of tests, coverage and linters.

To know how to procceed individually in each workspace, please readme the README in each one.

In order to put this project fully running, you must following the steps below
1. Install dependencies in workspace-blockchain
2. Start a local network (See [workspace-blockchain README](workspace-blockchain/README.md) for examples)
3. Start a postgresql database and create the required tables to cache the events (Please, read [workspace-cache-server README](workspace-cache-server/README.md))
4. Deploy the contracts to the local network (again, see [workspace-blockchain README](workspace-blockchain/README.md))
5. Install dependencies in workspace-cache-server (only the first time)
6. Start the cache-server
7. Install dependencies in workspace-webui (only the first time)
8. Start the webui
9. Install dependencies in workspace-android (only the first time)
10. Start the android app

This is a step-by-step on how to get all the workspaces working, but of course, you might not want to run the android app, so, no need to install the dependencies on that workspace. Or, you might not want to start the cache server, so you can ignore steps 3, 5 and 6. That's up to you what to run. But whatever that is, it must be it the order shown above.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](LICENSE)

## Credits
* Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
