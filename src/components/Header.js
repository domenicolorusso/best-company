import React from "react";

function Header() {


  const headerData = {
    name: "Best Company",
    description: "Financial Services",
  };

  const URL_img = 'https://www.hommeet.com/wp-content/uploads/2020/06/logo-02-300x180.png'


  return (
    <div className="Header">
      <div className="generalWrapper">
        <div className="headerContent">
          <img src={URL_img} alt="Best Company Logo" style={{width:'180px'}}/>
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
