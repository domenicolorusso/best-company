import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  takeName,
  takeSurname,
  takeTel,
  takeEmail,
  takeConfirmEmail,
} from "../store/features/user/userActions";

export default function useFormManagement() {
  const dispatch = useDispatch();
  const userValues = useSelector((state) => state.user);
  const [isOff, setIsOff] = useState(true);

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

  return [handleFormInput, userValues, handleSubmit, isOff, setIsOff];
}
