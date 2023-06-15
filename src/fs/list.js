import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesFolderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const filesList = await readdir(filesFolderPath);
    console.log(filesList);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();