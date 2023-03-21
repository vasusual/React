import React, { useState } from "react";
import { AiFillLock } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';
import RandomizeButton from "./RandomizeButton";

const HowToUse = () => {
const [showHowToUse, setShowHowToUse] = useState(false);

return (
    <div>
        <button className="howToUseBtn" onClick={() => setShowHowToUse(!showHowToUse)}>How to use</button>
        {showHowToUse && (
            <div className="howToUse">
                <p>Press <RandomizeButton/> to get a set of random colors</p>
                <p>If you like a color or several colors you can <AiFillLock /> them so they don't change when you randomize again</p>
                <p> <FiCopy /> allows you to copy the name of the color that you like</p>
                <button className="okBtn" onClick={() => setShowHowToUse(false)}>OK</button>
            </div>
        )}
    </div>
)
        };
export default HowToUse; 
