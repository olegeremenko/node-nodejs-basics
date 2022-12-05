import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const fileName = baseDir + '/files/fileToRead.txt';

const read = async () => {
    const stream = createReadStream(fileName);
    stream.pipe(process.stdout);
};

await read();
