import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { access, rename as renameFile } from 'fs/promises';

const oldPath = path.join(getDirname(import.meta.url), 'files', 'wrongFilename.txt');
const newPath = path.join(getDirname(import.meta.url), 'files', 'properFilename.md');

const doesFileExist = async(path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const rename = async () => {
  try {
    if (await doesFileExist(oldPath) && await doesFileExist(newPath)) {
      throw new Error('FS operation failed');
    } else {
      await renameFile(oldPath, newPath);
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();