import { Transform } from "stream";
import { stdout, stdin } from "process";

const transform = async () => {
  const createUpperCaseStream = () => {
    return new Transform({
      transform(chunk, enc, cb) {
        let chunkItem = chunk.toString().trim();
        const revers = chunkItem.split("").reverse().join("");
        cb(null, revers);
      },
    });
  };
  const reversText = createUpperCaseStream();
  stdin.pipe(reversText).pipe(stdout);
};

await transform();
