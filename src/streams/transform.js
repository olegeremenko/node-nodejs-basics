import { Transform } from 'stream';

const transform = async () => {
    const myTransformStream = new Transform({
        transform(chunk, encoding, callback) {
            console.log(chunk.toString().split("").reverse().join(""));
            callback();
        }
    });

    process.stdin.pipe(myTransformStream).pipe(process.stdout);
};

await transform();
