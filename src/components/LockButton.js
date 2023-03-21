import React from "react";
import { AiFillUnlock} from 'react-icons/ai'
import { AiFillLock} from 'react-icons/ai'

const LockButton = ({ isLocked, handleLock }) => (
  <button className="lock-button" onClick={handleLock}>
    {isLocked ? <AiFillLock size={30} strokeWidth={3} /> : <AiFillUnlock size={30} strokeWidth={3} /> }
  </button>
);

export default LockButton;
