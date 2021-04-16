import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

import Success from "../Success/Success";
import useFormManagement from "../../hooks/useFormManagement";
function ContactMe() {
  const section = "CONTACTME";
  const [handleFormInput, userValues, handleSubmit, isOff,setIsOff, user, errors, success, setSuccess] = useFormManagement();
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
          user={user}
          errors={errors}
        />
        {success && <Success setSuccess={setSuccess} />}
      </div>
    </div>
  );
}

export default ContactMe;
