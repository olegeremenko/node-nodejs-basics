import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cpus } from 'os';

class FibonacciWorker {
    constructor() {
        const baseDir = dirname(fileURLToPath(import.meta.url));
        this.worker = new Worker(`${baseDir}/worker.js`);
        this.taskId = 0;
    }

    calc(n) {
        const taskId = this.taskId;
        this.taskId++;

        this.worker.postMessage({
            n: n,
            id: taskId
        });

        return new Promise((resolve, reject) => {
            this.worker.on('message', data => {
                if (data.res !== undefined && data.id == taskId) {
                    resolve({
                        status: 'resolved',
                        data: data.res
                    });
                }
            })
            this.worker.on('err', () => {
                resolve({
                    status: 'error',
                    data: null
                });
            })
        });
    };

    destroy() {
        return this.worker.terminate();
    }
}

const performCalculations = async () => {
    const cpuCores = cpus();

    // calculate Fibonacci within multiple workers and single task
    const fibonacciWorkers = cpuCores.map(() => {
        return new FibonacciWorker();
    });

    const results = fibonacciWorkers.map((fibonacciWorker, index) => {
        return fibonacciWorker.calc(10 + index);
    })

    console.log(await Promise.all(results));

    await Promise.allSettled(fibonacciWorkers.map((fibonacciWorker) => {
        fibonacciWorker.destroy();
    }));


    // calculate Fibonacci within single worker and multiple tasks
    // const worker = new FibonacciWorker();
    //
    // const results = cpuCores.map((core, index) => {
    //     return worker.calc(10 + index);
    // })
    //
    // console.log(await Promise.all(results));
    //
    // await worker.destroy();
};

await performCalculations();
