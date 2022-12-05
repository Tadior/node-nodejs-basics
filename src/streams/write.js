import * as process from "process";
import * as fs from "fs";
import * as url from "url";

const __dirName = url.fileURLToPath(new URL(".", import.meta.url));

const path = `${__dirName}/files/fileToWrite.txt`;

const write = async () => {
  const writeStream = fs.createWriteStream(path);
  process.stdin.pipe(writeStream);
};

await write();
