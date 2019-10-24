// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import start from "./main";

console.log("index.js executed");
if (!window.dontDoItAgain) {
  window.dontDoItAgain = true;

  window.myEntryPointUrl = "http://localhost:3000/static/js/bundle.js";

  start();
}

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
