/* eslint-disable no-restricted-globals */
import { expose } from "threads/worker";
debugger;
console.log("worker " + self.name + " started!");

expose({
  test: message => {
    console.log("test('" + message + "') called on worker " + self.name);
  }
});

// setInterval(function() {
//   console.log("worker " + self.name + " working...");
// }, 1000);

// throw new Error("Worker " + self.name + " throwing exception");
