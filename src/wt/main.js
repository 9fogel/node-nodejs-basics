import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';
import { getDirname } from '../utils/dirnameHelper.js';

const cpuCoresNumber = os.cpus().length;
const workerFilePath = path.join(getDirname(import.meta.url), 'worker.js');

const createWorker = (i) => {
  return new Promise(function (resolve, reject) {
    const worker = new Worker(workerFilePath, { workerData: i + 10 });
    worker.on("message", (value) => {
      resolve({ status: 'resolved', data: value });
    });
    worker.on("error", () => {
      resolve({ status: 'error', data: null });
    });
  })
}

const performCalculations = async () => {
  const workerPromises = [];

  for (let i = 0; i < cpuCoresNumber; i++) {
    workerPromises.push(createWorker(i));
    }

  const resultsList = await Promise.all(workerPromises);

  console.log(resultsList);
};

await performCalculations();