import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const spawnChildProcess = async (args) => {
    const baseDir = dirname(fileURLToPath(import.meta.url));
    const child = spawn(`node`, [`${baseDir}/files/script.js`, ...args]);

    child.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    process.stdin.pipe(child.stdin);
};

spawnChildProcess(process.argv.splice(2));
