import React, {useState} from "react";
import Btn from "../Btn/Btn";
import ContactForm from "./ContactForm";

function ContactMe() {
  const [userData, setUserData ] = useState({})


  const handleFormInput = (e) => {
    setUserData( user => ({...user, [e.target.name]: e.target.value}))
    console.log(userData)
  }
  const section = "CONTACTME";
  return (
    <div className="ContactMe">
      <div className="generalWrapper">
        <ContactForm handleFormInput={handleFormInput} userData={userData}/>
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
