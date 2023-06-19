import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { createReadStream } from 'fs';
import { stdout } from 'process';
const { createHash } = await import('crypto');

const hash = createHash('sha256');

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = createReadStream(filePath);
  readStream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();