import * as fs from "fs";
import * as zlib from "zlib";
import * as url from "url";

const __dirName = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const readStream = fs.createReadStream(`${__dirName}/files/archive.gz`);
  const writeStream = fs.createWriteStream(
    `${__dirName}/files/fileToCompress.txt`
  );

  const decompressStream = zlib.createUnzip();

  readStream
    .pipe(decompressStream)
    .pipe(writeStream)
    .on("error", (err) => {
      throw err;
    });
};

await decompress();
