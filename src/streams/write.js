import path from 'path';
import fs from 'fs';
import { stdin } from 'process';
import { getDirname } from "../utils/dirnameHelper.js";

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = fs.createWriteStream(filePath);
  stdin.pipe(writableStream);
};

await write();