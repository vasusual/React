import React from "react";
const RandomizeButton = ({ handleClick }) => {
    return (
      <button className="randomize" onClick={handleClick}>
        Randomize
      </button>
    );
  };
  
  export default RandomizeButton;