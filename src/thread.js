/* eslint-disable no-restricted-globals */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { expose } from "threads/worker";

expose({
  doSomeWork: id => {
    console.log("worker " + id + " started!");
    setInterval(function() {
      console.log("worker " + id + " working...");
    }, 1000);
  }
});
