import React from "react";
import Car from "./Car";

function Customize() {
  return (
    <div className="Customize">
      <div className="generalWrapper">
        <Car />
        <h4>Scegli</h4>

        <form>
          <label>importo da richiedere</label>
          <input type="text" />
          <label>anticipo</label>
          <input type="text" />
        </form>
        <h4>Rate</h4>
        <div className="installmentWrapper">
          <button type="button" className="installmentBtn">
            <h3>Ciao</h3>
            <p>Ciao2</p>
          </button>
          <button type="button" className="installmentBtn">
            btn2
          </button>
          <button type="button" className="installmentBtn">
            btn3
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
