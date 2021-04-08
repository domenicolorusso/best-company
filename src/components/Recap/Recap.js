import React from "react";
import Btn from "../Btn/Btn";
import Car from "../Car/Car";
import RecapDetails from "../Recap/RecapDetails.js";
import ResultBox from "../ResultBox";

function Recap() {
  const section = "RECAP";
  return (
    <div className="Recap">
      <div className="generalWrapper">
        <Car/>
        <div className="wrapResultBox">
          <ResultBox>
            <p>ANTICIPO</p>
            <p>€0</p>
          </ResultBox>
          <ResultBox>
            <p>35 RATE DA</p>
            <p>€300</p>
          </ResultBox>
        </div>
        <ResultBox>
        <p>Rata Finale</p>
          <p>100€</p>
        </ResultBox>

        <RecapDetails />
        <Btn section={section} />
      </div>
    </div>
  );
}

export default Recap;
