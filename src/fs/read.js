import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const fileName = baseDir + '/files/fileToRead.txt';

const read = async () => {
    try {
        const contents = await readFile(fileName, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
