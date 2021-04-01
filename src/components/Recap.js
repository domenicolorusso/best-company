import React from "react";
import Btn from "./Btn";
import Car from "./Car";
import { NavLink } from "react-router-dom";
function Recap() {
  const section = "RECAP";
  return (
    <div className="Recap">
      <div className="generalWrapper">
        <Car />

        <Btn section={section} />
      </div>
    </div>
  );
}

export default Recap;
