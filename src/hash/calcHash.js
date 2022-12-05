import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const calculateHash = async () => {
  const out = await readFile(
    join(__dirName, "files", "fileToCalculateHashFor.txt"),
    "utf-8"
  );
  console.log(createHash("sha256").update(out).digest("hex"));
};

await calculateHash();
