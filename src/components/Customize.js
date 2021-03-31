import React from "react";
import Car from "./Car";

function Customize() {
  return (
    <div className="Customize">
      <div className="generalWrapper">
        <Car />
        <h4>Scegli</h4>

        <form className="chooseForm">
          <div>
            <label>importo da richiedere</label>
            <input type="number" placeholder='Euro' min='0'/>
          </div>
          <div>
            <label>anticipo</label>
            <input type="number" placeholder='Euro' min='0'/>
          </div>
        </form>
        <h4>Rate</h4>
        <div className="installmentWrapper">
          <button type="button" className="installmentBtn">
            <h3>Ciao</h3>
            <p>24 Mesi</p>
          </button>
          <button type="button" className="installmentBtn">
            <h3>Ciao</h3>
            <p>36 Mesi</p>
          </button>
          <button type="button" className="installmentBtn">
            <h3>Ciao</h3>
            <p>48 Mesi</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
