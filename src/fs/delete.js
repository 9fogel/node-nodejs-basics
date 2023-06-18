import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { rm } from 'fs/promises';

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();