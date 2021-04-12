import React from "react";
import { useSelector } from "react-redux";
function DetailsTable() {
  const installValues = useSelector((state) => state.install);
  return (
    <div className="DetailsTable">
      <div className="detailsSection">
        <h5>Prezzo Veicolo</h5>
        <p>{`${installValues.price}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Anticipo</h5>
        <p>{`${installValues.advance}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Numero rate</h5>
        <p>{`${installValues.installments}`}</p>
      </div>
      <div className="detailsSection">
        <h5>Importo rate</h5>
        <p>{`${installValues.rataMensile}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Rata Finale</h5>
        <p>{`${installValues.finalInstallment}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Importo Finanziato</h5>
        <p>{`${installValues.importoFinanziato}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Costi del Finanziamento</h5>
        <p>{`${installValues.costiFinanziamento}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Importo da Rimborsare</h5>
        <p>{`${installValues.importoRimborsare}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Spese istruttoria</h5>
        <p>{`${installValues.speseIstruttoria}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Spese di incasso e gestione pratica</h5>
        <p>{`${installValues.spesaIncasso}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>Imposta di bollo</h5>
        <p>{`${installValues.impostaBollo}€`}</p>
      </div>
      <div className="detailsSection">
        <h5>TAN</h5>
        <p>{`${installValues.tan}%`}</p>
      </div>
      <div className="detailsSection">
        <h5>TAEG</h5>
        <p>{`${installValues.taeg}%`}</p>
      </div>
    </div>
  );
}

export default DetailsTable;
