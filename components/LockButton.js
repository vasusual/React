import React, { useState } from "react";

const LockButton = () => {
  const [locked, setLocked] = useState(true);

  const handleClick = () => {
    setLocked(!locked);
  };

  return (
    <button className="lock-button" onClick={handleClick}>
      {locked ? "Lock" : "Unlock"}
    </button>
  );
};

export default LockButton;
