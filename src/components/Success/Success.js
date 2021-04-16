import React from "react";
import Confetti from 'react-confetti'
function Success({setSuccess}) {
  return (
    <div className="Success">
      <Confetti />
      <div className="overlay"></div>
      <div className="successCard">
        <h1>bravissimo ✔</h1>
        <button onClick={()=> setSuccess(false)}>+</button>
      </div>
    </div>
  );
}

export default Success;
