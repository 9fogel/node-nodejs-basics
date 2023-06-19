import path from 'path';
import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getDirname } from '../utils/dirnameHelper.js';

const sourcePath = path.join(getDirname(import.meta.url), 'files', 'fileToCompress.txt');
const destinationPath = path.join(getDirname(import.meta.url), 'files', 'archive.gz');

const pipe = promisify(pipeline);

const gzip = createGzip();
const source = fs.createReadStream(sourcePath);
const destination = fs.createWriteStream(destinationPath);

const compress = async () => {
  await pipe(source, gzip, destination);
};

await compress();