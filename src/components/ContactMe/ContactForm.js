import React, {useState} from "react";
// import { takeName } from '../../store/features/user/userActions';
// import { useDispatch, useSelector} from 'react-redux';




function ContactForm({handleFormInput, handleSubmit, userValues}) {
  // const [userData, setUserData ] = useState({})
  // const dispatch = useDispatch();
  // const userValues = useSelector( state => state.user )


  // console.log(userValues)
  const [validate, setValidate] = useState(false)
  return (
    <div className="ContactForm">
      <h4>Invia Richesta</h4>
      <p>Inserisci i tuoi dati e sarai contattato al piu presto</p>
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor='name'>Nome*</label>
          <input type="text" id='name' name='name' onChange={handleFormInput} value={userValues.name || ''}/>
        </div>
        <div className="formField">
          <label htmlFor='surname'>Cognome*</label>
          <input type="text" id='surname' name='surname' onChange={handleFormInput}  value={userValues.surname || ''} />
        </div>
        <div className="formField">
          <label htmlFor='telNumber'>Cellulare*</label>
          <input type="text" id='telNumber' name='telNumber' onChange={handleFormInput}  value={userValues.telNumber || ''} />
        </div>
        <div className="formField">
          <label htmlFor='email'>Indirizzo E-mail*</label>
          <input type="email" id='email' name='email'  onChange={handleFormInput}  value={userValues.email || ''} />
        </div>
        <div className="formField">
          <label htmlFor='confirmEmail'>Conferma E-mail*</label>
          <input type="email" id='confirmEmail' name='confirmEmail' onChange={handleFormInput} value={userValues.confirmEmail || ''}/>
        </div>
        <button>Clicca</button>
      </form>
      <p>*campi obbligatori</p>
    </div>
  );
}

export default ContactForm;
