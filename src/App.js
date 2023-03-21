import React, { useState } from "react";
import Div from "./components/Div";
import ColorBox from "./components/ColorBox";
import "./index.css";
import RandomizeButton from "./components/RandomizeButton";
import HowToUse from "./components/HowToUse";
import Welcome from "./components/Welcome";

const App = () => {
  const sixBoxes = [];
  for (let i = 0; i < 6; i++) {
    sixBoxes.push({ color: "#ffffff", locked: false });
  }

  const [colors, setColors] = useState(sixBoxes);

  const randomizeColors = () => {
    const newColors = colors.map((item) =>
      item.locked
        ? item
        : { ...item, color: "#" + Math.floor(Math.random() * 16777215).toString(16) }
    );
    setColors(newColors);
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(colors[index].color);
  };

  const handleLock = (index) => {
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Welcome/>
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
      <HowToUse />
    </div>
  );
};

export default App;
