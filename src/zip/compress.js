import * as fs from "fs";
import * as zlib from "zlib";
import * as url from "url";

const __dirName = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const readStream = fs.createReadStream(
    `${__dirName}/files/fileToCompress.txt`
  );
  const writeStream = fs.createWriteStream(`${__dirName}/files/archive.gz`);

  const compressStream = zlib.createGzip();

  readStream
    .pipe(compressStream)
    .pipe(writeStream)
    .on("error", (err) => {
      throw err;
    });
};

await compress();
