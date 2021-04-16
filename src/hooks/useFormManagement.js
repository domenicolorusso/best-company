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
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    surname: "",
    telNumber: "",
    email: "",
    confirmEmail: "",
  });
  const [isOff, setIsOff] = useState(true);
  const [success, setSuccess] = useState(false)
  const prefissiValidi = [
    "313",
    "320",
    "324",
    "327",
    "328",
    "329",
    "330",
    "331",
    "333",
    "334",
    "335",
    "336",
    "337",
    "338",
    "339",
    "340",
    "342",
    "344",
    "345",
    "346",
    "347",
    "348",
    "349",
    "350",
    "351",
    "353",
    "360",
    "366",
    "368",
    "370",
    "371",
    "373",
    "375",
    "377",
    "379",
    "380",
    "388",
    "389",
    "391",
    "392",
    "393",
  ];
  //  console.log(transNumber)

function makeButtonEnabled(){
  if (user.name !== ''){
    setIsOff(false);
  }
  if (user.surname !== ''){
    setIsOff(false);
  }
  if (user.email !== ''){
    setIsOff(false);
  }
  if (user.confirmEmail !== ''){
    setIsOff(false);
  }
  if (user.telNumber !== ''){
    setIsOff(false);
  }
}

  useEffect(() => {
    setIsOff(true);
    makeButtonEnabled()
    // if 
    //   if (isValidForm(user)) {
    //     console.log("active");
    //     setIsOff(false);
    //   } else {
    //     console.log("disabled");
    //     setIsOff(true);
    //   }
    // }
  });
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  function lunghezzaNumeroTel(telNumber) {
    return telNumber.length > 8 && telNumber.length < 12;
  }
  function verificaPrefissi(telNumber) {
    const transNumber = telNumber.toString().split('').slice(0,3).join('');
    let prefissoPresente = prefissiValidi.filter((num) => transNumber.includes(num));
    return prefissoPresente;
  }

  function isValidForm(value) {
    let err = {};
    if (!value.name.trim()) {
      err.name = "Inserire nome";
    }
    if (!value.surname.trim()) {
      err.surname = "Inserire cognome";
    }
    if (!value.telNumber) {
      err.telNumber = "Inserire numero di telefono";
    } else if (isNaN(value.telNumber)) {
      err.telNumber = "Inserire un numero";
    } else if (!lunghezzaNumeroTel(value.telNumber)) {
      err.telNumber = "Compreso tra 8 e 12 caratteri";
    } else if (verificaPrefissi(value.telNumber).length === 0) {
      err.telNumber = "Il numero non ha un prefisso valido";
    }
    if (!value.email) {
      err.email = "Inserire email";
    }
    if (!value.confirmEmail) {
      err.confirmEmail = "Inserire conferma email";
    } else if (value.email !== value.confirmEmail) {
      err.confirmEmail = "Il valore deve essere uguale a quello dell'email";
    }
    return err;
  }

  function dispatchUser() {
    dispatch(takeName(user.name));
    dispatch(takeSurname(user.surname));
    dispatch(takeTel(user.telNumber));
    dispatch(takeEmail(user.email));
    dispatch(takeConfirmEmail(user.confirmEmail));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(isValidForm(user));
    if (Object.entries(isValidForm(user)).length === 0) {
      console.log("no errori");
      dispatchUser();
      setSuccess(true)
      setUser({
        name: "",
        surname: "",
        telNumber: "",
        email: "",
        confirmEmail: "",
      })
    } else {
      console.log("errori");
    }
  };

  return [
    handleFormInput,
    userValues,
    handleSubmit,
    isOff,
    setIsOff,
    user,
    errors,
    success,
    setSuccess
  ];
}
