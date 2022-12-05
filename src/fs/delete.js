import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const fileName = baseDir + '/files/fileToRemove.txt';

const remove = async () => {
    try {
        await unlink(fileName);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
