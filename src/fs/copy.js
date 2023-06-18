import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { mkdir, readdir, copyFile } from 'fs/promises';

const newDirPath = path.join(getDirname(import.meta.url), 'files_copy');
const filesFolderPath = path.join(getDirname(import.meta.url), 'files');

const copy = async () => {
  try {
    const files = await readdir(filesFolderPath);
    await mkdir(newDirPath);
    for (let file of files) {
      await copyFile(path.join(filesFolderPath, file), path.join(newDirPath, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
