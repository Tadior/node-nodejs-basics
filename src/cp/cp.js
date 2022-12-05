import { spawn } from "child_process";
import { stdin, argv } from "process";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const process = spawn("node", [`${__dirname}/files/script.js`, ...args]);
  stdin.pipe(process.stdin);
  process.stdout.on("data", (data) => {
    console.log(`Received from child process: ${data}`);
  });
  process.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
  process.on("close", (code) => {
    console.log(`Child process is closed with code ${code}\n`);
  });
};

spawnChildProcess(argv);
