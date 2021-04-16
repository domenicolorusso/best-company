import { useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();

  return (
    <div className="NavBar">
      <ul className="navList">
        <div
          className={`navLink ${
            location.pathname === "/customize" ? "active" : ""
          }`}
        >
          <div className="dot"></div>
          <p>Personalizza</p>
        </div>
        <div
          className={`navLink ${
            location.pathname === "/recap" ? "active" : ""
          }`}
        >
          <div className="dot"></div>
          <p>Riepilogo</p>
        </div>
        <div
          className={`navLink ${
            location.pathname === "/contactme" ? "active" : ""
          }`}
        >
          <div className="dot"></div>
          <p>Contattami</p>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
