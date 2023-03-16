import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [hexColors, setHexColors] = useState([
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff"
  ]);

  
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <div />

      {hexColors.map((color, index) => (
        <div className="App" style={{ backgroundColor: color }} key={index}>
          <h1>{color}</h1>
          <button className="copy" onClick={() => handleCopy(index)}>Copy</button>
          <button className="lock-button">
            Lock
    </button>
        </div>
      ))}
    </div>
  );
};

export default App;
