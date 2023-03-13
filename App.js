import React, { useState } from "react";
import "./index.css";
import {AiFillLock, AiFillUnlock} from 'react-icons/ai'

const App = () => {
  const [hex1, setHex1] = useState("#ffffff");
  const randomizedHex1 = () => {
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex1(randomColor1);
  };

  const [hex2, setHex2] = useState("#ffffff");
  const randomizedHex2 = () => {
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex2(randomColor2);
  };

  const [hex3, setHex3] = useState("#ffffff");
  const randomizedHex3 = () => {
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex3(randomColor3);
  };
  
  const [hex4, setHex4] = useState("#ffffff");
  const randomizedHex4 = () => {
    const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex4(randomColor4);
  };

  const handleRandomize = () => {
    randomizedHex1();
    randomizedHex2();
    randomizedHex3();
    randomizedHex4();
  };

  return (
    <div style={{ display: "flex",  alignItems: "center" }}>
      <button onClick={handleRandomize}>Randomize</button>

      <div className="App" style={{ backgroundColor: hex1 }}>
        <h1>{hex1}</h1>
        <button onClick={() => navigator.clipboard.writeText(hex1)}>Copy</button>
        <button className="icon"><AiFillLock/></button>
      </div>

      <div className="App" style={{ backgroundColor: hex2 }}>
        <h1>{hex2}</h1>
        <button onClick={() => navigator.clipboard.writeText(hex2)}>Copy</button>
        <button className="icon">{AiFillLock}</button>
      </div>

      <div className="App" style={{ backgroundColor: hex3 }}>
        <h1>{hex3}</h1>
        <button onClick={() => navigator.clipboard.writeText(hex3)}>Copy</button>
        <button className="icon">{AiFillLock}</button>
      </div>

      <div className="App" style={{ backgroundColor: hex4 }}>
        <h1>{hex4}</h1>
        <button onClick={() => navigator.clipboard.writeText(hex4)}>Copy</button>
        <button className="icon">{AiFillLock}</button>
      </div>
    </div>
  );
};

export default App;

// import React, {useState} from 'react';
// import './index.css'

// const App= ()=> {


// // const [hex, setHex]= useState('#ffffff');
// //   const randomizedHex= () =>{
// //     const randomColor= "#"+ Math.floor(Math.random()*16777215).toString(16)
// //     setHex(randomColor)
// //   }

//   const [hex1, setHex1]= useState('#ffffff');
//   const randomizedHex1= () =>{
//     const randomColor1= "#"+ Math.floor(Math.random()*16777215).toString(16)
//     setHex1(randomColor1)
//   }

//   const [hex2, setHex2]= useState('#ffffff');
//   const randomizedHex2= () =>{
//     const randomColor2= "#"+ Math.floor(Math.random()*16777215).toString(16)
//     setHex2(randomColor2)
//   }
//   const [hex3, setHex3]= useState('#ffffff');
//   const randomizedHex3= () =>{
//     const randomColor3= "#"+ Math.floor(Math.random()*16777215).toString(16)
//     setHex3(randomColor3)
//   }
//   const [hex4, setHex4]= useState('#ffffff');
//   const randomizedHex4= () =>{
//     const randomColor4= "#"+ Math.floor(Math.random()*16777215).toString(16)
//     setHex4(randomColor4)
//   }



//   return (
//     <body style={{display:'flex'}}>
//         <button onClick={randomizedHex1(); randomizedHex2(); randomizedHex3(), randomizedHex4()}>Randomize</button>

//     <div className='App'style={{backgroundColor:`${hex1}`} }>
//       <h1>{hex1}</h1>
//       <button onClick={()=>navigator.clipboard.writeText(hex1)}>Copy</button>
//     </div>

//     <div className='App'style={{backgroundColor:`${hex2}`} }>
//       <h1>{hex2}</h1>
//       <button onClick={()=>navigator.clipboard.writeText(hex2)}>Copy</button>
//     </div>


//     <div className='App'style={{backgroundColor:`${hex3}`} }>
//       <h1>{hex3}</h1>
//       <button onClick={()=>navigator.clipboard.writeText(hex3)}>Copy</button>
//     </div>

//     <div className='App'style={{backgroundColor:`${hex4}`} }>
//       <h1>{hex4}</h1>
//       <button onClick={()=>navigator.clipboard.writeText(hex4)}>Copy</button>
//     </div>



//     </body>
//   )
// }
// export default App;
