import React from "react";
import H1 from "../H1";
import CopyButton from "./CopyButton";
import LockButton from "./LockButton";

const ColorBox = ({ color, handleCopy }) => (
  <div className="App" style={{ backgroundColor: color }}>
    <H1 color={color} />
    <CopyButton handleCopy={handleCopy} />
    <LockButton />
  </div>
);

export default ColorBox;
