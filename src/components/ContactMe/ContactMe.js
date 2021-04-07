import React, { useState } from "react";
import Btn from "../Btn/Btn";
import ContactForm from "./ContactForm";
import {
  takeName,
  takeSurname,
  takeTel,
  takeEmail,
  takeConfirmEmail,
} from "../../store/features/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function ContactMe() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const userValues = useSelector((state) => state.user);
  // const [userData, setUserData ] = useState({})
console.log(userValues)
  const handleFormInput = (e) => {
    // dispatch(takeName(e.target.value))
    // setUserData( user => ({...user, [e.target.name]: e.target.value}))
    // console.log(userValues)

    switch (e.target.name) {
      case "name":
        dispatch(takeName(e.target.value));
      case "surname":
        dispatch(takeSurname(e.target.value));
      case "telNumber":
        dispatch(takeTel(e.target.value));
      case "email":
        dispatch(takeEmail(e.target.value));
      case "confirmEmail":
        dispatch(takeConfirmEmail(e.target.value));
    }
  };

  const isSubmitted = () =>
    userValues.name &&
    userValues.surname &&
    userValues.telNumber &&
    userValues.email &&
    userValues.confirmEmail &&
    userValues.email == userValues.confirmEmail;

  const handleSubmit = () => {
    
    if (isSubmitted()) {
      console.log("submitted");
      alert(userValues);
    } else {
      alert("error");
    }
  };
  const section = "CONTACTME";
  return (
    <div className="ContactMe">
      <div className="generalWrapper">
        <ContactForm
          handleFormInput={handleFormInput}
          userData={userData}
          handleSubmit={handleSubmit}
        />
        <div className="infoPrivacy">
          <h4>INFORMATIVA PRIVACY</h4>
          <p>
            Ti informiamo che il Calcolatore Finanziario e' di proprieta' di
            Best Company
          </p>
          <h5>
            Presa visione dell'informativa in materia di privacy di{" "}
            <a href="#">TMI</a> e di <a href="#">TFSI</a>{" "}
          </h5>
        </div>
        <Btn section={section} />
      </div>
    </div>
  );
}

export default ContactMe;
