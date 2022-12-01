import { createHash } from 'crypto';
import { readFile } from 'node:fs/promises';

const hashSha256 = async (string) => {
    return createHash('sha256').update(string).digest('hex');
}

const calculateHash = async () => {
    const content = await readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8');
    console.log(await hashSha256(content));
};

await calculateHash();
