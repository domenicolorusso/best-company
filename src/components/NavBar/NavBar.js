import { NavLink } from "react-router-dom";

function NavBar() {
//TOFIX: nav non navigabile 
//TOFIX: nav media queries per mobile  
  return (
    <div className="NavBar">
      <ul className="navList">
      {/* <div className="navLine"></div> */}
        <NavLink to="/customize" className="navLink">
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
