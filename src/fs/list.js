import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { readdir } from 'fs/promises';

const filesFolderPath = path.join(getDirname(import.meta.url), 'files');

const list = async () => {
  try {
    const filesList = await readdir(filesFolderPath);
    console.log(filesList);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();