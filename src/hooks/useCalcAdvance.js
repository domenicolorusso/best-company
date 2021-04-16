import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  taeg,
} from "../store/features/install/installActions";

export default function useCalcAdvance() {
  const dispatch = useDispatch();
  const installValues = useSelector((state) => state.install);
  
    useEffect(() => {
      dispatchInitState();
    }, []);

  // ------------Calcolo rata mensile --------- ////////////

  const calcolaminValue = (prezzoVeicolo, rataFinale) => {
    return prezzoVeicolo - rataFinale;
  };
  function calcolaRataMensile(importoRateizzabile, mesi, veicoloPrezzo) {
    const rataFinale = calcolaRataFinale(mesi, veicoloPrezzo);
    const speseIstruttoria = 350;
    const ammontareDelFinanziamento =
      Number(importoRateizzabile) + speseIstruttoria;
    let rate = 0.035 / 12;
    let nper = mesi - 1;
    let pv = -ammontareDelFinanziamento;
    let fv = rataFinale / (1 + rate);
    let a = Math.pow(1 + rate, nper);
    let prezzo = (-(pv * a) - fv) / ((a - 1) / rate);
    return Math.ceil(prezzo);
  }
  // ------------Calcolo rata finale --- ////////////
  function calcolaRataFinale(mesi, veicoloPrezzo) {
    const percentualeRataFinale = percentualiRataFinale[mesi];
    return Number(veicoloPrezzo) * Number(percentualeRataFinale);
  }

  // ------ calcola piano ---------- //
  function calcolaPiano(
    importoRateizzabile,
    mesi,
    rataMensile,
    rataFinale,
    veicoloPrezzo
  ) {
    const speseIstruttoria = 350;
    const speseIncasso = 3.5;
    const costiBollo = 16;
    let importoAuto = veicoloPrezzo;
    let acconto = Number(veicoloPrezzo) - Number(importoRateizzabile);
    let importoFinanziato =
      Number(importoRateizzabile) + Number(speseIstruttoria);
    let totaleDaRimborsare =
      (Number(rataMensile) + Number(speseIncasso)) * (Number(mesi) - 1) +
      rataFinale +
      speseIncasso +
      costiBollo;
    let costiFinanziamento =
      Number(totaleDaRimborsare) - Number(importoFinanziato);
    return {
      importoFinanziato,
      totaleDaRimborsare,
      costiFinanziamento,
      speseIstruttoria,
      speseIncasso,
      importoAuto,
      costiBollo,
      acconto,
    };
  }

  const calc = (price, amount) => {
    return price - amount;
  };
  const percentualiRataFinale = {
    12: 0.45,
    24: 0.45,
    36: 0.4,
    48: 0.35,
    60: 0.3,
    72: 0.25,
  };
  //TODO: tan e taeg variano in base a qualcosa :D
  const dispatchInitState = () => {
    dispatch(calculateFinalInstallment(ratFinale));
    dispatch(rataMensile(calcolaSingoleRate(installValues.amount)));
    dispatch(importoFinanziato(piano.importoFinanziato));
    dispatch(costiFinanziamento(piano.costiFinanziamento));
    dispatch(importoRimborsare(piano.totaleDaRimborsare));
    dispatch(speseIstruttoria(piano.speseIstruttoria));
    dispatch(spesaIncasso(piano.speseIncasso));
    dispatch(impostaBollo(piano.costiBollo));
    dispatch(tan(9));
    dispatch(taeg(8.2));
  };

  let valoreMinimo = calcolaminValue(
    installValues.price,
    installValues.finalInstallment
  );

  let ratMensile = calcolaRataMensile(
    installValues.amount,
    installValues.installments,
    installValues.price
  );

  function calcolaSingoleRate(e) {
    let ratMensile24 = calcolaRataMensile(e, 24, installValues.price);
    let ratMensile36 = calcolaRataMensile(e, 36, installValues.price);
    let ratMensile48 = calcolaRataMensile(e, 48, installValues.price);
    return {
      24: ratMensile24,
      36: ratMensile36,
      48: ratMensile48,
    };
  }

  let ratFinale = calcolaRataFinale(
    installValues.installments,
    installValues.price
  );
  let piano = calcolaPiano(
    installValues.amount,
    installValues.installments,
    ratMensile,
    ratFinale,
    installValues.price
  );

  //----------Component Handler, qui vendono chiamate le funzioni -----------//

  function handldeAdvanceCalculation(e) {
    dispatch(takeAdvance(calc(installValues.price, e.target.value)));
    dispatch(takeAmount(parseInt(e.target.value)));
    // console.log(calcolaSingoleRate(e.target.value));

    dispatch(rataMensile(calcolaSingoleRate(e.target.value)));
    dispatch(calculateFinalInstallment(Number(calcolaRataFinale(installValues.installments, installValues.price))));
  }

  function handleMonthsInstallment(installNumberArray) {
    dispatch(selectInstallment(installNumberArray));
    dispatch(
      calculateFinalInstallment(
        Number(calcolaRataFinale(installNumberArray, installValues.price))
      )
    );
    calcolaminValue(installValues.price, installValues.finalInstallment);
  }
  return [
    handldeAdvanceCalculation,
    handleMonthsInstallment,
    installValues,
    percentualiRataFinale,
    valoreMinimo,
  ];
}
