import { spawn, Worker } from "threads";

const MAX_WORKERS = 1;

export default function start() {
  for (let i = 0; i < MAX_WORKERS; i++) {
    createWorker(i);
  }
}

async function createWorker(name) {
  console.log("creating worker #" + name);
  debugger;
  let url = window.myEntryPointUrl;
  const obj = await spawn(new Worker(url));
  console.log("calling test on worker #" + name + "...");
  await obj.test("hello!");
  console.log("...called test on worker #" + name);
}
