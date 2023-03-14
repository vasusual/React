import React, { useState, useEffect } from "react";
import "./index.css";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

const App = () => {
  const [hexColors, setHexColors] = useState([  "#ffffff", "#ffffff", "#ffffff","#ffffff","#ffffff","#ffffff"]);

  const randomizeColors = () => {
    const newColors = hexColors.map(() => "#" + Math.floor(Math.random() * 16777215).toString(16));
    setHexColors(newColors);
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(hexColors[index]);
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code.toLowerCase() === "space") {
        event.preventDefault();
        randomizeColors();
      }
    });
  }, []);

  return (
    <div style={{ display: "flex",  alignItems: "center" }}>
      {/* <button className="randomize" onClick={randomizeColors}>Randomize</button> */}
      <div/>

      {hexColors.map((color, index) => (
        <div className="App" style={{ backgroundColor: color }} key={index}>
          <h1>{color}</h1>
          <button onClick={() => handleCopy(index)}>Copy</button>
          <button className="lock-button" data-type="lock">
            <AiFillUnlock size={24} data-type="lock" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
