import { access, mkdir, readdir, copyFile, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const srcPath = baseDir + '/files/';
const dstPath = baseDir + '/files_copy/';

const dirExists = async (path) => {
    try {
        await access(path, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

const copy = async () => {
    try {
        const srcPathExists = await dirExists(srcPath);
        const dstPathExists = await dirExists(dstPath);

        if (!srcPathExists || dstPathExists) {
            throw new Error('FS operation failed');
        }

        await mkdir(dstPath, { recursive: true });
        const files = await readdir(srcPath);
        await Promise.all(files.map(file => copyFile(srcPath + file, dstPath + file)));
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

copy();
