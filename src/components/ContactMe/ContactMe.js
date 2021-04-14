import React, { useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import {
  takeName,
  takeSurname,
  takeTel,
  takeEmail,
  takeConfirmEmail,
} from "../../store/features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
//TODO spostare la logica in custom hook 
function ContactMe() {
  const [isOff, setIsOff] = useState(true);
  const section = "CONTACTME";
  
  const dispatch = useDispatch();
  const userValues = useSelector((state) => state.user);
  console.log(userValues);

  const handleFormInput = (e) => {
    switch (e.target.name) {
      case "name":
        dispatch(takeName(e.target.value));
        break;
      case "surname":
        dispatch(takeSurname(e.target.value));
        break;
      case "telNumber":
        dispatch(takeTel(e.target.value));
        break;
      case "email":
        dispatch(takeEmail(e.target.value));
        break;
      case "confirmEmail":
        dispatch(takeConfirmEmail(e.target.value));
        break;
    }
  };
  //todo: da sviluppare meglio
  const isValidForm = () =>
    userValues.name &&
    userValues.surname &&
    userValues.telNumber &&
    userValues.email &&
    userValues.confirmEmail &&
    userValues.email === userValues.confirmEmail;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      console.log("submitted");
      alert(JSON.stringify(userValues));
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    if (isValidForm()) {
      console.log("active");
      setIsOff(false);
    } else {
      console.log("disabled");
      setIsOff(true);
    }
  });
  return (
    <div className="ContactMe">
      <div className="generalWrapper">
        <ContactForm
          handleFormInput={handleFormInput}
          userValues={userValues}
          handleSubmit={handleSubmit}
          isOff={isOff}
          setIsOff={setIsOff}
          section={section}
        />
      </div>
    </div>
  );
}

export default ContactMe;
