import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import {
  takeAmount,
  takeAdvance,
  selectInstallment,
  rataMensile,
  calculateFinalInstallment,
  importoFinanziato,
  costiFinanziamento,
  importoRimborsare,
  speseIstruttoria,
  spesaIncasso,
  impostaBollo,
  tan,
  taeg
} from "../store/features/install/installActions";

export default function useCalcAdvance() {
  const dispatch = useDispatch();
  const installValues = useSelector((state) => state.install);

// TODO: adattare i calcoli al custom hook e collegarlo con UI

  // ------------Calcolo rata mensile --------- ////////////

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
  // ------------Calcolo rata finale --- ////////////
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
    speseIstruttoria,
    speseIncasso,
    importoAuto,
    costiBollo,
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



  let ratMensile = calcolaRataMensile(installValues.amount, installValues.installments, installValues.price)
  let ratFinale = calcolaRataFinale(installValues.installments, installValues.price)
  let piano = calcolaPiano(installValues.amount, installValues.installments, ratMensile, ratFinale, installValues.price)


  useEffect(()=>{
    console.log(piano)
    console.log(ratFinale)
    dispatch(calculateFinalInstallment(ratFinale))
    dispatch(rataMensile(ratMensile))
    dispatch(importoFinanziato(piano.importoFinanziato))
    dispatch(costiFinanziamento(piano.costiFinanziamento))
    dispatch(importoRimborsare(piano.totaleDaRimborsare))
    dispatch(speseIstruttoria(piano.speseIstruttoria))
    dispatch(spesaIncasso(piano.speseIncasso))
    dispatch(impostaBollo(piano.costiBollo))
    dispatch(tan(9))
    dispatch(taeg(8.20))
  },[])




  //----------Component Handler, qui vendono chiamate le funzioni -----------//


  function handldeAdvanceCalculation(e) {
    dispatch(takeAdvance(calc(installValues.price, e.target.value)));
    dispatch(takeAmount(parseInt(e.target.value)));
    dispatch(calculateFinalInstallment(calcolaRataFinale(installValues.installments, installValues.price).toFixed(0)))
    //TODO: capire come calcolare le altre e visualizzarle sui bottoni
 
    //BUG: rata mensile negativa
    //valore minimo: prezzo veicolo - rata finale
    //TODO: mettere valore minimo 
    //TOFIX: installments object, aggiornare i bottoni con un oggetto in redux.. soluzione migliore?
    let ratMensile = calcolaRataMensile(e.target.value, installValues.installments, installValues.price)
    dispatch(rataMensile(ratMensile))
    
  }

  function handleMonthsInstallment(installNumberArray) {
    dispatch(selectInstallment(installNumberArray));
    dispatch(calculateFinalInstallment(calcolaRataFinale(installNumberArray, installValues.price).toFixed(0)))
  }
  return [ handldeAdvanceCalculation, handleMonthsInstallment, installValues, percentualiRataFinale ];
}
