import React, { useState } from "react";
import Btn from "../Btn/Btn";
import Car from "../Car/Car";
import ResultBox from "../ResultBox";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
function Customize() {


const dispatch = useDispatch()

const installValues = useSelector(state=>state.install)
console.log(installValues)


  const totVal = 15000
  const [askValue, setAskValue] = useState(totVal);
 const [anticipo, setAnticipo] = useState(0)
  const section = "CUSTOMIZE";




  function handldeSlider(e) {
    setAskValue(e.target.value);
    setAnticipo(totVal-askValue)
  }

  return (
    <div className="Customize">
      <div className="generalWrapper">
        <Car/>

        <h4>Scegli</h4>

        <form className="chooseForm">
          <div>
            <label>importo da richiedere</label>
            <input
              type="number"
              placeholder="Euro"
              min="0"
              value={askValue}
            />
          </div>
          <div>
            <label>anticipo</label>
            <input type="number" placeholder="Euro" min="0" value={anticipo} />
          </div>
        </form>

        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max={totVal}
            value={askValue}
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
        <ResultBox>
          <p>Rata Finale</p>
          <p>100€</p>
        </ResultBox>

        <p>TAN 9,00% TAEG 8,20%</p>

        <Btn section={section} />
      </div>
    </div>
  );
}

export default Customize;
