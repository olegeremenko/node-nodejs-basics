import { access, writeFile, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const fileName = baseDir + '/files/fresh.txt';
const fileContent = 'I am fresh and young';

const create = async () => {
    try {
        await access(fileName, constants.F_OK);
    } catch (e) {
        if (e.code == 'ENOENT') {
            await writeFile(fileName, fileContent);
        }
    }

    throw new Error('FS operation failed');
};

await create();
