import React, { useState, useEffect } from "react";
import Div from "./components/Div";
import ColorBox from "./components/ColorBox";
import "./index.css";

const App = () => {
  const [hexColors, setHexColors] = useState(Array(5).fill("#ffffff"));

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
      {hexColors.map((color, index) => (
        <ColorBox key={index} color={color} handleCopy={() => handleCopy(index)} />
      ))}
    </div>
  );
};

export default App;
