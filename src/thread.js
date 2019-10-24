/* eslint-disable no-restricted-globals */
import { expose } from "threads/worker";

expose({
  doSomeWork: id => {
    console.log("worker " + id + " started!");
    setInterval(function() {
      console.log("worker " + id + " working...");
    }, 1000);
  }
});
