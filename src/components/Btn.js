import React from "react";
import SingleBtn from "./SingleBtn";
import { NavLink } from "react-router-dom";
function Btn(props) {
  const btnNames = {
    personalizza: "RIEPILOGO",
    riepilogo: {
      personalizza: "PERSONALIZZA",
      contattami: "CONTATTAMI",
    },
    contattami: {
      riepilogo: "RIEPILOGO",
      invia: "INVIA",
    },
  };
  return (
    <div className="Btn">
      {props.section === "CUSTOMIZE" && (
        <NavLink to="/recap" className="navLink">
          <SingleBtn btnNames={btnNames.personalizza} />
        </NavLink>
      )}
      {props.section === "RECAP" && (
        <>
          <NavLink to="/customize" className="navLink">
            <SingleBtn btnNames={btnNames.riepilogo.personalizza} />
          </NavLink>
          <NavLink to="/contactme" className="navLink">
            <SingleBtn btnNames={btnNames.riepilogo.contattami} />
          </NavLink>
        </>
      )}
      {props.section === "CONTACTME" && (
        <>
          <NavLink to="/recap" className="navLink">
            <SingleBtn btnNames={btnNames.contattami.riepilogo} />
          </NavLink>
          <NavLink to="/" className="navLink">
            <SingleBtn btnNames={btnNames.contattami.invia} />
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Btn;
