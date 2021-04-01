import React, { useState } from "react";
import Btn from "./Btn";
import Car from "./Car";
import { NavLink } from "react-router-dom";
function Customize() {
  const [sliderValue, setSliderValue] = useState(5000);
  const btnName = "RIEPILOGO";
  function handldeSlider(e) {
    setSliderValue(e.target.value);
  }
  return (
    <div className="Customize">
      <div className="generalWrapper">
        <Car />

        <h4>Scegli</h4>

        <form className="chooseForm">
          <div>
            <label>importo da richiedere</label>
            <input
              type="number"
              placeholder="Euro"
              min="0"
              value={sliderValue}
            />
          </div>
          <div>
            <label>anticipo</label>
            <input type="number" placeholder="Euro" min="0" />
          </div>
        </form>

        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="10000"
            value={sliderValue}
            className="slider"
            id="myRange"
            onChange={(e) => handldeSlider(e)}
          />
        </div>

        <h4>Rate</h4>

        <div className="installmentWrapper">
          <button type="button" className="installmentBtn">
            <h3>€408</h3>
            <p>24 Mesi</p>
          </button>
          <button type="button" className="installmentBtn">
            <h3>€300</h3>
            <p>36 Mesi</p>
          </button>
          <button type="button" className="installmentBtn">
            <h3>€246</h3>
            <p>48 Mesi</p>
          </button>
        </div>
        <div className="finalInstallment">
          <h3>Rata Finale</h3>
          <p>100euro</p>
        </div>
        <NavLink to="/recap" className="navLink">
          <Btn btnName={btnName} />
        </NavLink>
      </div>
    </div>
  );
}

export default Customize;
