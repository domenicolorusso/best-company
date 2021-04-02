import React from "react";

function ContactForm() {
  return (
    <div className="ContactForm">
      <h4>Invia Richesta</h4>
      <p>Inserisci i tuoi dati e sarai contattato al piu presto</p>
      <form>
        <div className="formField">
          <label>Nome*</label>
          <input type="text" required />
        </div>
        <div className="formField">
          <label>Cognome*</label>
          <input type="text" required />
        </div>
        <div className="formField">
          <label>Cellulare*</label>
          <input type="text" required />
        </div>
        <div className="formField">
          <label>Indirizzo E-mail*</label>
          <input type="email" required />
        </div>
        <div className="formField">
          <label>Conferma E-mail*</label>
          <input type="email" required />
        </div>
      </form>
      <p>*campi obbligatori</p>
    </div>
  );
}

export default ContactForm;
