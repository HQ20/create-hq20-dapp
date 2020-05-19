<div align="center">
    <img style="" width="768" src="title.webp">
</div>

> Welcome to HQ20 create-react-solidity-app. With a couple of different templates from a basic setup for smart contracts development, a react webui and an api with cache server. This is great for every new project. Contains examples of tests, coverage, documentation generators, linters, etc.

<div align="center">
    <div>
        <a
            href="https://travis-ci.org/HQ20/create-react-solidity-app"><img
                src="https://travis-ci.org/HQ20/create-react-solidity-app.svg?branch=master" /></a>&emsp;
        <a
            href="https://dependabot.com"><img
                src="https://api.dependabot.com/badges/status?host=github&repo=HQ20/contracts" /></a>&emsp;
    </div>
</div>

## Quick Overview

```sh
npx create-react-solidity-app my-app
cd my-app
npm start
```

The following templates are available:
- **smart-contracts** an example of a solidity smart contracts project
- **react-webui** using a *create-react-app* boilerplate with typescript and ethers.js connecting to a local network
- **api** an api with a cache server built with express.js and postgresql database, listening and caching events.

## Usage

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app:

### Yarn

```sh
yarn create react-solidity-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── react-webui
│   ├── (to complete)
│   └── (to complete)
├── smart-contracts
│   └── (to complete)
└── api
    └── (to complete)
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

This is a step-by-step on how to get all the workspaces working, but of course, you might not want to run the android app, so, no need to install the dependencies on that workspace. Or, you might not want to start the cache server, so you can ignore steps 3, 5 and 6. That's up to you what to run. But whatever that is, it must be it the order shown above.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](LICENSE)

## Credits
* Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
