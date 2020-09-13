import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setvalue] = useState(0);

  const [text, searchText] = useState("");

  const [apiResponse, setAPIResponse] = useState(null);

  async function fetchText() {
    const res = await fetch("http://www.randomtext.me/api/").then((res) =>
      res.json()
    );

    setAPIResponse(res);
    console.log("fetchText -> res", res);
  }
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
      <h2
        id="test"
        onClick={() => {
          fetchText();
        }}
      >
        Start editing to see some magic happen!
      </h2>
      <p>{apiResponse?.text_out || ""}</p>
    </div>
  );
}

export default App;
