import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const list = async () => {
  try {
    const files = await readdir(__dirName);
    console.log(files);
  } catch {
    console.log("Error FS operation failed");
  }
};

await list();
