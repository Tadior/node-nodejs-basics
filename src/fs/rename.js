import * as fs from "fs";
import * as url from "url";

const __dirName = url.fileURLToPath(new URL(".", import.meta.url));
const fsPromises = fs.promises;

const rename = async () => {
  fsPromises
    .rename(
      `${__dirName}/files/wrongFilename.txt`,
      `${__dirName}/files/properFilename.md`
    )
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await rename();
