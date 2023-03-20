import React from "react";
import H1 from "./H1";
import CopyButton from "./CopyButton";
import LockButton from "./LockButton";

const ColorBox = ({ color, handleCopy, handleLock, isLocked }) => (
  <div className="App" style={{ backgroundColor: color }}>
    <H1 color={color} />
    <CopyButton handleCopy={handleCopy} />
    <LockButton isLocked={isLocked} handleLock={handleLock} />
  </div>
);

export default ColorBox;
