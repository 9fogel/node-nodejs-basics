import path from 'path';
import fs from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getDirname } from '../utils/dirnameHelper.js';

const sourcePath = path.join(getDirname(import.meta.url), 'files', 'archive.gz');
const destinationPath = path.join(getDirname(import.meta.url), 'files', 'fileToCompress.txt');

const pipe = promisify(pipeline);

const unzip = createUnzip();
const source = fs.createReadStream(sourcePath);
const destination = fs.createWriteStream(destinationPath);

const decompress = async () => {
  await pipe(source, unzip, destination);
};

await decompress();