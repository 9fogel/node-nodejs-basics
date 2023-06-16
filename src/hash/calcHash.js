import { createReadStream } from 'fs';
import { stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const { createHash } = await import('crypto');

const hash = createHash('sha256');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = createReadStream(filePath);
  readStream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();