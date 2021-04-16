import React from "react";

function Success({setSuccess}) {
  return (
    <div className="Success">
      <div className="overlay"></div>
      <div className="successCard">
        <h1>bravissimo ✔</h1>
        <button onClick={()=> setSuccess(false)}>+</button>
      </div>
    </div>
  );
}

export default Success;
