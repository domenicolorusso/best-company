import { useDispatch, useSelector } from "react-redux";
import {
  takeAmount,
  takeAdvance,
  selectInstallment,
  calculateFinalInstallment,
  calculateInstallmentValues,
  importoFinanziato,
  costiFinanziamento,
  importoRimborsare,
  spesaIstruttoria,
  spesaIncasso,
  impostaBollo,
  tan,
  taeg
} from "../store/features/install/installActions";

export default function useCalcAdvance() {
  const dispatch = useDispatch();
  const installValues = useSelector((state) => state.install);



  // ------------Calcolo rata mensile --- ////////////

 function calcolaRataMensile(importoRateizzabile, mesi, veicoloPrezzo) {

    const rataFinale = calcolaRataFinale(mesi, veicoloPrezzo);
    const speseIstruttoria = 350;
    const ammontareDelFinanziamento = Number(importoRateizzabile) + speseIstruttoria;
    let rate = 0.035 / 12;
    let nper = mesi - 1;
    let pv = -ammontareDelFinanziamento;
    let fv = rataFinale / (1 + rate);
    let a = Math.pow(1 + rate, nper);
    let prezzo = (-(pv * a) - fv) / ((a - 1) / rate)
    return Math.ceil(prezzo);
}
  // ------------Calcolo rata mensile --- ////////////
function calcolaRataFinale(mesi, veicoloPrezzo) {
  const percentualeRataFinale = percentualiRataFinale[mesi];
  return Number(veicoloPrezzo) * Number(percentualeRataFinale);
}

// ------ calcola piano ---------- //
function calcolaPiano(importoRateizzabile, mesi, rataMensile, rataFinale, veicoloPrezzo) {

  const speseIstruttoria = 350;
  const speseIncasso = 3.5;
  const costiBollo = 16;
  let importoAuto = veicoloPrezzo;
  let acconto = Number(veicoloPrezzo) - Number(importoRateizzabile);
  let importoFinanziato = Number(importoRateizzabile) + Number(speseIstruttoria);
  let totaleDaRimborsare = (Number(rataMensile) + Number(speseIncasso)) * (Number(mesi) - 1) + rataFinale + speseIncasso + costiBollo;
  let costiFinanziamento = Number(totaleDaRimborsare) - Number(importoFinanziato);
  return {
    importoFinanziato,
    totaleDaRimborsare,
    costiFinanziamento,
    importoAuto,
    acconto
  }
}


const percentualiRataFinale = {
  12: 0.45,
  24: 0.45,
  36: 0.40,
  48: 0.35,
  60: 0.30,
  72: 0.25
}


  const calc = (price, amount) => {
    return price - amount;
  };





  //Component Handler
  function handldeAdvanceCalculation(e) {
    dispatch(takeAdvance(calc(installValues.price, e.target.value)));
    dispatch(takeAmount(parseInt(e.target.value)));
  }

  function handleMonthsInstallment(installNumberArray) {
    dispatch(selectInstallment(installNumberArray));
  }
  return [ handldeAdvanceCalculation, handleMonthsInstallment, installValues ];
}
