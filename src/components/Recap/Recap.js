import React from "react";
import Btn from "../Btn/Btn";
import Car from "../Car/Car";
import RecapDetails from "../Recap/RecapDetails.js";
import ResultBox from "../ResultBox";
import { useSelector } from "react-redux";
function Recap() {
  const installValues = useSelector((state) => state.install);
  const section = "RECAP";
  return (
    <div className="Recap">
      <div className="generalWrapper">
        <Car />
        <div className="wrapResultBox">
          <ResultBox>
            <p>ANTICIPO</p>
            <p>{`€${installValues.advance}`}</p>
          </ResultBox>
          <ResultBox>
            <p>{`${installValues.installments - 1} RATE DA`}</p>
            <p>{`${installValues.rataMensile}€`}</p>
          </ResultBox>
        </div>
        <ResultBox>
          <p>Rata Finale</p>
          <p>{`€${installValues.finalInstallment}`}</p>
        </ResultBox>

        <RecapDetails />
        <Btn section={section} />
      </div>
    </div>
  );
}

export default Recap;
