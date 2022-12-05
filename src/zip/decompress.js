import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const srcFile = baseDir + '/files/archive.gz';
const dstFile = baseDir + '/files/fileToCompress.txt';

const decompress = async () => {
    const unzip = createUnzip();
    const inputStream = createReadStream(srcFile);
    const outStream = createWriteStream(dstFile);
    inputStream.pipe(unzip).pipe(outStream);
};

await decompress();
