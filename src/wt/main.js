import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { cpus } from "os";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async () => {
  const workers = new Array(cpus().length)
    .fill()
    .map(
      (_, index) =>
        new Worker(`${__dirname}/worker.js`, { workerData: index + 10 })
    );

  const workersRes = await Promise.allSettled(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
          worker.on("message", (data) => {
            resolve({ status: "resolved", data });
          });

          worker.on("error", () => {
            reject({ status: "error", data: null });
          });
        })
    )
  );

  console.log(workersRes);
};

await performCalculations();
