import React, { useEffect } from "react";
import Btn from "../Btn/Btn";
import Car from "../Car/Car";
import ResultBox from "../ResultBox";
import useCalcAdvance from "../../hooks/useCalcAdvance.js";
import { currencyFormatter } from '../../hooks/utils'
function Customize() {
  const section = "CUSTOMIZE";
  const [
    handldeAdvanceCalculation,
    handleMonthsInstallment,
    installValues,
    percentualiRataFinale,
    valoreMinimo
  ] = useCalcAdvance();

  return (
    <div className="Customize">
      <div className="generalWrapper">
        <Car />
        <h4>Scegli</h4>
        <form className="chooseForm">
          <div>
            <label htmlFor="amount">importo da richiedere</label>
            <input
              id="amount"
              type="number"
              placeholder="Euro"
              min='0'
              value={installValues.amount }
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="advance">anticipo</label>
            <input
              id="advance"
              type="number"
              placeholder="Euro"
              min="0"
              value={installValues.advance}
              onChange={() => {}}
            />
          </div>
        </form>

        <div className="slidecontainer">
          <input
            type="range"
            min={ valoreMinimo}
            max={installValues.price}
            value={installValues.amount}
            className="slider"
            id="myRange"
            onChange={(e) => handldeAdvanceCalculation(e)}
          />
        </div>

        <h4>Rate</h4>
        <div className="installmentWrapper">
          <button
            type="button"
            className={`installmentBtn ${
              installValues.installments === 24 ? "isActive" : ""
            }`}
            onClick={() => handleMonthsInstallment(24)}
          >
            <h3>{`€${currencyFormatter(installValues.rataMensile)}`}</h3>
            <p>24 Mesi</p>
          </button>
          <button
            type="button"
            className={`installmentBtn ${
              installValues.installments === 36 ? "isActive" : ""
            }`}
            onClick={() => handleMonthsInstallment(36)}
          >
            <h3>€300</h3>
            <p>36 Mesi</p>
          </button>
          <button
            type="button"
            className={`installmentBtn ${
              installValues.installments === 48 ? "isActive" : ""
            }`}
            onClick={() => handleMonthsInstallment(48)}
          >
            <h3>€246</h3>
            <p>48 Mesi</p>
          </button>
        </div>
        <ResultBox>
          <p>Rata Finale</p>
          <p>{ `€${currencyFormatter(installValues.finalInstallment)}`}</p>
        </ResultBox>

        <p>TAN 9,00% TAEG 8,20%</p>

        <Btn section={section} />
      </div>
    </div>
  );
}

export default Customize;
