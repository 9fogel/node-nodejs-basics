import { mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const newDirPath = path.join(__dirname, 'files_copy');
const filesFolderPath = path.join(__dirname, 'files');

const copy = async () => {
  try {
    await mkdir(newDirPath);
    const files = await readdir(filesFolderPath);
    for (let file of files) {
      await copyFile(path.join(filesFolderPath, file), path.join(newDirPath, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
