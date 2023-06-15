import { access, rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    //TODO: properFilename.md already exists - error must be thrown
    await renameFile(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();