import React, { useEffect } from "react";
import Btn from "../Btn/Btn";
function ContactForm({
  // handleFormInput, handleSubmit, userValues, isOff, setIsOff, section, user,
  isOff,
  setIsOff,
  section,
  onSubmit,
  handleSubmit,
  errors,
  register,
}) {

  return (
    <div className="ContactForm">
      <h4>Invia Richesta</h4>
      <p>Inserisci i tuoi dati e sarai contattato al piu presto</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formField">
          <label htmlFor="name">Nome*</label>
          <input {...register("name")} />
          {errors?.name && <span>{errors.name.message}</span>}
        </div>
        <div className="formField">
          <label htmlFor="surname">Cognome*</label>
          <input {...register("surname")}/>
          {errors?.surname && <span>{errors.surname.message}</span>}
        </div>
        <div className="formField">
          <label htmlFor="telNumber">Cellulare*</label>
          <input {...register("telNumber")} />
          {errors?.telNumber && <span>{errors.telNumber.message}</span>}
        </div>
        <div className="formField">
          <label htmlFor="email">Indirizzo E-mail*</label>
          <input {...register("email")}/>
          {errors?.email && <span>{errors.email.message}</span>}
        </div>
        <div className="formField">
          <label htmlFor="confirmEmail">Conferma E-mail*</label>
          <input {...register("confirmEmail")}/>
          {errors?.confirmEmail && <span>{errors.confirmEmail.message}</span>}
        </div>
        <div className="infoPrivacy">
          <h4>INFORMATIVA PRIVACY</h4>
          <p>Ti informiamo che il Calcolatore Finanziario e' di proprieta' di Best Company</p>
          <h5>
            Presa visione dell'informativa in materia di privacy di <a href="#">TMI</a> e di <a href="#">TFSI</a>{" "}
          </h5>
        </div>
        <Btn section={section} isOff={!isOff} />
      </form>
      <p>*campi obbligatori</p>
    </div>
  );
}

export default ContactForm;
