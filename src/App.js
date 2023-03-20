import React, { useState } from "react";
import Div from "./components/Div";
import ColorBox from "./components/ColorBox";
import "./index.css";
import RandomizeButton from "./components/RandomizeButton";

const App = () => {
  const sixBoxes = [ ];
  for  ( let i=0; i<6; i++) {
    sixBoxes.push({ color: "#ffffff", locked: false }) ;
  }
  
  const [colors, setColors] = useState(sixBoxes);

  

  const randomizeColors = () => {
    console.log("13 randomized ");
    const newColors = colors.map((item) =>
      item.locked
        ? item
        : { ...item, color: "#" + Math.floor(Math.random() * 16777215).toString(16) }
    );
    setColors(newColors);
  };

  const handleCopy = (index) => {
    console.log("21 copy handled ");
    navigator.clipboard.writeText(colors[index].color);
  };

  const handleLock = (index) => {
    console.log("26 lock handled ");
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <RandomizeButton handleClick={randomizeColors} />
      <div className="color-boxes" style={{ display: "flex" }}>
        {colors.map((item, index) => (
          <ColorBox
            key={index}
            color={item.color}
            handleCopy={() => handleCopy(index)}
            handleLock={() => handleLock(index)}
            isLocked={item.locked}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

