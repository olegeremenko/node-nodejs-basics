import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const path = baseDir + '/files/';

const list = async () => {
    try {
        const filesList = await readdir(path);
        filesList.forEach(file => {
            console.log(file);
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
