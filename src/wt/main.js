import os from 'os';
import path from 'path';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { getDirname } from '../utils/dirnameHelper.js';

const cpuCoresNumber = os.cpus().length;
const workerFilePath = path.join(getDirname(import.meta.url), 'worker.js');

const performCalculations = async () => {
  // if (isMainThread) {
    for (let i = 0; i < cpuCoresNumber; i++) {
      const worker = new Worker(workerFilePath, { workerData: i + 10 });
      worker.on('message', msg => console.log(`Worker message received: ${msg}`));
      worker.on('error', err => console.error(err));
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    }
  // } else {

  // }
};

await performCalculations();