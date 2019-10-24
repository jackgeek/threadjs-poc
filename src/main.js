import { spawn, Worker } from "threads";

const MAX_WORKERS = 100;

export default function start() {
  for (let i = 0; i < MAX_WORKERS; i++) {
    createWorker(i);
  }
}

async function createWorker(name) {
  console.log("creating worker #" + name);
  const obj = await spawn(new Worker("./thread.js"));
  await obj.doSomeWork(name);
}
