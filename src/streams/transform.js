import { Transform } from 'stream';
import { stdin } from 'process';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    }
  })
  stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();