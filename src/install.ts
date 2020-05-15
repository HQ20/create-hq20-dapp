import path from 'path';
import fs from 'fs';
import got from 'got';
import { extract } from 'tar';
import execa from 'execa';
import stream from 'stream';
import { promisify } from 'util';
import packageJSON from '../package.json';

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
        got.stream(`https://codeload.github.com/${packageJSON.repository.name}/tar.gz/master`),
        extract({ cwd: folderPath, strip: 2 }, [`starter-kit-master/templates`])
    );
}

export async function installDependencies(projectName: string) {
    const folderPath = path.join(process.cwd(), projectName, 'smart-contracts');
    return await execa('yarnpkg', { cwd: folderPath })
}
