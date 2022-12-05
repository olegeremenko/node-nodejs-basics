import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const fileName = baseDir + '/files/fileToWrite.txt';

const write = async () => {
    const writeStream = createWriteStream(fileName);
    process.stdin.pipe(writeStream);
};

await write();
