import React from "react";
import SingleBtn from "./SingleBtn";
import { NavLink } from "react-router-dom";
import ResetBtn from "./ResetBtn";
import SubmitBtn from "./SubmitBtn";
import PureBtn from "./PureBtn";

function Btn({ section, isOff }) {
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
          <PureBtn btnNames={btnNames.personalizza} />
        </NavLink>
      )}
      {section === "RECAP" && (
        <>
          <NavLink to="/customize" className="navLink">
            <PureBtn
              btnNames={btnNames.riepilogo.personalizza}
              btnClass={"isLeft"}
            />
          </NavLink>
          <NavLink to="/contactme" className="navLink">
            <PureBtn btnNames={btnNames.riepilogo.contattami} />
          </NavLink>
        </>
      )}
      {section === "CONTACTME" && (
        <>
          <NavLink to="/recap" className="navLink">
            <PureBtn
              btnNames={btnNames.contattami.riepilogo}
              btnClass={"isLeft"}
            />
          </NavLink>
          <SubmitBtn btnNames={btnNames.contattami.invia} isOff={isOff} />
        </>
      )}
    </div>
  );
}

export default Btn;
