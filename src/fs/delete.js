import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const remove = async () => {
  try {
    await fs.unlink(path.join(__dirName, "files", "fileToRemove.txt"));
  } catch {
    throw new Error("Error FS operation failed");
  }
};

await remove();
