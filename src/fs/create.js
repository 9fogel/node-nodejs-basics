import path from 'path';
import { getDirname } from '../utils/dirnameHelper.js';
import { writeFile } from 'fs/promises';

const filePath = path.join(getDirname(import.meta.url), 'files', 'fresh.txt');
const text = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, text, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();