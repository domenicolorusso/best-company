import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import useFormManagement from "../../hooks/useFormManagement";
function ContactMe() {
  const section = "CONTACTME";
  const [handleFormInput, userValues, handleSubmit, isOff,setIsOff] = useFormManagement();
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
