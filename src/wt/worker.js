import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', data => {
    try {
        if (data.n !== undefined && data.id !== undefined) {
            sendResultToParent(nthFibonacci(data.n), data.id);
            // console.log(`calculated ${data.n}/${data.id}`);
        }
    } catch (e) {
    }
})

const sendResultToParent = (value, id) => {
    parentPort.postMessage({
        res: value,
        id: id
    });
};
