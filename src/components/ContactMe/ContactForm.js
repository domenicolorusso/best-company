import React, {useState} from "react";

function ContactForm({handleFormInput, handleSubmit}) {

  const [validate, setValidate] = useState(false)
  return (
    <div className="ContactForm">
      <h4>Invia Richesta</h4>
      <p>Inserisci i tuoi dati e sarai contattato al piu presto</p>
      <form onSubmit={handleSubmit()}>
        <div className="formField">
          <label htmlFor='name'>Nome*</label>
          <input type="text" id='name' name='name' onChange={handleFormInput}/>
        </div>
        <div className="formField">
          <label htmlFor='surname'>Cognome*</label>
          <input type="text" id='surname' name='surname' onChange={handleFormInput} />
        </div>
        <div className="formField">
          <label htmlFor='telNumber'>Cellulare*</label>
          <input type="text" id='telNumber' name='telNumber' onChange={handleFormInput} />
        </div>
        <div className="formField">
          <label htmlFor='email'>Indirizzo E-mail*</label>
          <input type="email" id='email' name='email'  onChange={handleFormInput}  />
        </div>
        <div className="formField">
          <label htmlFor='confirmEmail'>Conferma E-mail*</label>
          <input type="email" id='confirmEmail' name='confirmEmail' onChange={handleFormInput}/>
        </div>
      </form>
      <p>*campi obbligatori</p>
    </div>
  );
}

export default ContactForm;
