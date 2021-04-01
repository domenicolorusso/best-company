import React from "react";
import { NavLink } from "react-router-dom";

import Btn from "./Btn";
import Car from "./Car";
import RecapDetails from "./RecapDetails";

function Recap() {
  const section = "RECAP";
  return (
    <div className="Recap">
      <div className="generalWrapper">
        <Car />
        <RecapDetails />
        <Btn section={section} />
      </div>
    </div>
  );
}

export default Recap;
