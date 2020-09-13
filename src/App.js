import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setvalue] = useState(0);

  const [text, searchText] = useState("");
  return (
    <div className="App">
      <span> {value}</span>

      <h1
        onClick={() => {
          setvalue((c) => c + 1);
        }}
      >
        Hello CodeSandbox learn react
      </h1>
      <input
        value={text}
        onChange={(e) => {
          searchText(e.target.value);
        }}
      />
      <h2 id="test">Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
