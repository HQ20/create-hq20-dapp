#!/usr/bin/env node
import meow from 'meow';
import listr from 'listr';

import {
    createProjectFodler,
    isUserUsingValidYarn,
    copyTemplates,
    installDependencies,
} from './install';


const cli = meow(`
    Usage
      $ yarn create react-solidity-app <project-name>

    🌈 Examples 🌈
      $ yarn create react-solidity-app my-app
`);


const tasks = new listr([
    {
        title: 'User is using yarn',
        task: () => Promise.resolve(isUserUsingValidYarn())
    },
    {
        title: 'Create project folder',
        task: () => Promise.resolve(createProjectFodler(cli.input[0]))
    },
    {
        title: 'Download templates',
        task: () => Promise.resolve(copyTemplates(cli.input[0]))
    },
    {
        title: 'Install dependencies with Yarn',
        task: () => installDependencies(cli.input[0])
    },
]);

tasks.run().catch(err => {
    // TODO: better error message
    console.error(err);
});
