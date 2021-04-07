import React from "react";
import SingleBtn from "./SingleBtn";
import { NavLink } from "react-router-dom";



function Btn({section, isOff}) {
 
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
      {section === "CUSTOMIZE" && (
        <NavLink to="/recap" className="navLink">
          <SingleBtn btnNames={btnNames.personalizza}/>
        </NavLink>
      )}
      {section === "RECAP" && (
        <>
          <NavLink to="/customize" className="navLink">
            <SingleBtn btnNames={btnNames.riepilogo.personalizza} class={'isLeft'}/>
          </NavLink>
          <NavLink to="/contactme" className="navLink">
            <SingleBtn btnNames={btnNames.riepilogo.contattami} />
          </NavLink>
        </>
      )}
      {section === "CONTACTME" && (
        <>
          <NavLink to="/recap" className="navLink">
            <SingleBtn btnNames={btnNames.contattami.riepilogo} class={'isLeft'}/>
          </NavLink>
          <NavLink to="/" className="navLink">
            <SingleBtn btnNames={btnNames.contattami.invia} isOff={isOff}/>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Btn;
