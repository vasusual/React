import React from "react";
import { FiCopy } from 'react-icons/fi';

const CopyButton = ({ handleCopy }) => (
  <button className="copy" onClick={handleCopy}>
    <FiCopy />
  </button>
);

export default CopyButton;
