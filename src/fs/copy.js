import { join } from "path";
import { mkdir, readdir, copyFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const homePath = join(__dirName, "files");
const destPath = join(__dirName, "files_copy");

const copy = async () => {
  try {
    const dir = await readdir(homePath, { withFileTypes: true });
    await mkdir(join(__dirName, "files_copy"));
    dir.forEach((file) => {
      copyFile(join(homePath, file.name), join(destPath, file.name));
    });
  } catch {
    console.error("Error FS operation failed");
  }
};

await copy();
