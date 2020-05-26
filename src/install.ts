import path from 'path';
import fs from 'fs';
import got from 'got';
import { extract } from 'tar';
import execa from 'execa';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);


export function isUserUsingValidYarn() {
    // TODO: add verification
    return true;
}

export function createProjectFodler(projectName: string) {
    const folderPath = path.join(process.cwd(), projectName);
    if (fs.existsSync(folderPath)) {
        return false;
    }
    fs.mkdirSync(path.join(process.cwd(), projectName));
    return true;
}

export async function copyTemplates(projectName: string) {
    const folderPath = path.join(process.cwd(), projectName);
    return await pipeline(
        got.stream(`https://codeload.github.com/hq20/create-hq20-dapp/tar.gz/release`),
        extract({ cwd: folderPath, strip: 2 }, [`create-hq20-dapp-release/templates`])
    );
}

export async function installDependencies(projectName: string) {
    return await Promise.all([
        execa('yarnpkg', { cwd:  path.join(process.cwd(), projectName, 'api') }),
        execa('yarnpkg', { cwd:  path.join(process.cwd(), projectName, 'react-webui') }),
        execa('yarnpkg', { cwd:  path.join(process.cwd(), projectName, 'smart-contracts') }),
    ]);
}
