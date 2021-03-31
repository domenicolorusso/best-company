import React from "react";

function Header() {


  const headerData = {
    name: "Best Company",
    description: "Financial Services",
  };

  
  return (
    <div className="Header">
      <div className="generalWrapper">
        <div className="headerContent">
          <img src='./company-logo.png' alt="Best Company Logo" />
          <div className='headerContent__data'>
          <h4>{headerData.name}</h4>
          <p>{headerData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
