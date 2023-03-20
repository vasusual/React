import React from "react";
import { AiFillUnlock} from 'react-icons/ai'
import { AiFillLock} from 'react-icons/ai'

const LockButton = ({ isLocked, handleLock }) => (
  <button className="lock-button" onClick={handleLock}>
    {isLocked ? <AiFillUnlock/> : <AiFillLock/> }
  </button>
);

export default LockButton;
