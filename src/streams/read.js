import path from 'path';
import fs from 'fs';
import { stdout } from 'process';
import { getDirname } from "../utils/dirnameHelper.js";

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRead.txt');

const read = async () => {
  const readableStream = fs.createReadStream(filePath);
  readableStream.pipe(stdout);
};

await read();