import React from "react";

function ContactForm() {
  return (
    <div className="ContactForm">
      <h4>Invia Richesta</h4>
      <p>Inserisci i tuoi dati e sarai contattato al piu presto</p>
      <form>
        <div className="formField">
          <label htmlFor='name'>Nome*</label>
          <input type="text" id='name' required />
        </div>
        <div className="formField">
          <label htmlFor='surname'>Cognome*</label>
          <input type="text" id='surname' required />
        </div>
        <div className="formField">
          <label htmlFor='telNumber'>Cellulare*</label>
          <input type="text" id='telNumber' required />
        </div>
        <div className="formField">
          <label htmlFor='email'>Indirizzo E-mail*</label>
          <input type="email" id='email' required />
        </div>
        <div className="formField">
          <label htmlFor='confirmEmail'>Conferma E-mail*</label>
          <input type="email" id='confirmEmail' required />
        </div>
      </form>
      <p>*campi obbligatori</p>
    </div>
  );
}

export default ContactForm;
