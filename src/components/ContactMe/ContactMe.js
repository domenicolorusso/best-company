import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    if (isSubmitted()) {
      console.log("active");
      setIsOff(false);
    } else {
      console.log("disabled");
      setIsOff(true);
    }
  });

  const [isOff, setIsOff] = useState(true);
  // const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const userValues = useSelector((state) => state.user);
  // const [userData, setUserData ] = useState({})
  console.log(userValues);

  const handleFormInput = (e) => {
    // dispatch(takeName(e.target.value))
    // setUserData( user => ({...user, [e.target.name]: e.target.value}))
    // console.log(userValues)

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

    // if (
    //   userValues.name &&
    //   userValues.surname &&
    //   userValues.telNumber &&
    //   userValues.email &&
    //   userValues.confirmEmail &&
    //   userValues.email == userValues.confirmEmail
    // ){
    //   console.log('active')
    //   setIsOff(false)
    // } else {
    //   console.log('disabled')
    //   setIsOff(true)
    // }
  };
  //da sviluppare meglio
  const isSubmitted = () =>
    userValues.name &&
    userValues.surname &&
    userValues.telNumber &&
    userValues.email &&
    userValues.confirmEmail &&
    userValues.email == userValues.confirmEmail;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitted()) {
      console.log("submitted");
      alert(JSON.stringify(userValues));
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
          // userData={userData}
          userValues={userValues}
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
        <Btn section={section} isOff={isOff} />
      </div>
    </div>
  );
}

export default ContactMe;
