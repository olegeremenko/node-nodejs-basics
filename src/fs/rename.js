import {access, constants, rename as fs_rename } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));

const oldFileName = baseDir + '/files/wrongFilename.txt';
const newFileName = baseDir + '/files/properFilename.md'

const rename = async () => {
    try {
        await access(newFileName, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (e) {
        if (e.code == 'ENOENT') {
            await fs_rename(oldFileName, newFileName);
        } else {
            throw e;
        }
    }
};

await rename();
