import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
function NavBar() {
  const installValues = useSelector((state) => state.install);


//TOFIX: nav non navigabile 
//TOFIX: nav media queries per mobile



  return (
    <div className="NavBar">
      <ul className="navList">
      {/* <div className="navLine"></div> */}
        <NavLink to="/customize"  className="navLink">
          <div className="dot"></div>
          <p>Personalizza</p>
        </NavLink>
        <NavLink to="/recap" className="navLink">
          <div className="dot"></div>
          <p>Riepilogo</p>
        </NavLink>
        <NavLink to="/contactme" className="navLink">
          <div className="dot"></div>
          <p>Contattami</p>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
