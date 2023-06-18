import path from 'path';
import { fork } from 'child_process';
import { getDirname } from '../utils/dirnameHelper.js';

const filePath = path.join(getDirname(import.meta.url), 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args);
};

spawnChildProcess( [1, 'arg2', {'obj': 3}]);
