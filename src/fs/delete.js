import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();