import React from "react";

const CopyButton = ({ handleCopy }) => (
  <button className="copy" onClick={handleCopy}>
    Copy
  </button>
);

export default CopyButton;
