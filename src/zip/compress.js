import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const baseDir = dirname(fileURLToPath(import.meta.url));
const srcFile = baseDir + '/files/fileToCompress.txt';
const dstFile = baseDir + '/files/archive.gz';

const compress = async () => {
    const gzip = createGzip();
    const inputStream = createReadStream(srcFile);
    const outStream = createWriteStream(dstFile);
    inputStream.pipe(gzip).pipe(outStream);
};

await compress();
