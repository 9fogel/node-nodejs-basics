import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const text = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, text, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();