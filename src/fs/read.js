import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { readFile } from 'fs/promises';

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();