import { NavLink } from "react-router-dom";

function NavBar() {

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
