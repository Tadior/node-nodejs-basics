import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileТame = fileURLToPath(import.meta.url);
const __dirТame = dirname(__fileТame);

const read = async () => {
  try {
    const text = await readFile(
      join(__dirТame, "files", "fileToRead.txt"),
      "utf-8"
    );
    console.log(text);
  } catch {
    throw new Error("Error FS operation failed");
  }
};

await read();
