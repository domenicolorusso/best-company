import React from "react";
import Btn from "./Btn";
import { NavLink } from "react-router-dom";
function ContactMe() {
  const section = "CONTACTME";
  return (
    <div className="ContactMe">
      <div className="generalWrapper">
        <Btn section={section} />
      </div>
    </div>
  );
}

export default ContactMe;
