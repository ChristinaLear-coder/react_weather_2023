import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> React Weather App</h1>
        <Weather />
        <footer>
          Coded by Christina Lear,{" "}
          <a href="" target="_blank">
            {" "}
            open-sourced on GitHub and deployed by Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
