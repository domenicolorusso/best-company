import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { takeName, takeSurname, takeTel, takeEmail, takeConfirmEmail } from "../store/features/user/userActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function useFormManagement() {



  function lunghezzaNumeroTel(telNumber) {
    return telNumber.length > 8 && telNumber.length < 12;
  }
  function verificaPrefissi(telNumber) {
    return prefissiValidi.includes(telNumber.substring(0, 3));
  }

  
  const userSchema = yup.object().shape({
    name: yup.string().required("Inserisci il nome"),
    surname: yup.string().required("Inserisci il cognome"),
    telNumber: yup
      .string()
      .required("Inserisci il numero di telefono")
      .test("isLong", "La lunghezza deve essere compresa tra 8 e 12 caratteri", (value, context) => lunghezzaNumeroTel(value))
      .test("isValidPrefix", "Inserisci un numero con un prefisso valido", (value, context) => verificaPrefissi(value)),
    email: yup.string().required("Inserisci email ").email("Inserisci email valida"),
    confirmEmail: yup
      .string()
      .required("Inserisci email ")
      .email("Inserisci email valida")
      .oneOf([yup.ref("email")], "Il valore deve essere ugale al valore dell'email"),
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const dispatch = useDispatch();
  const userValues = useSelector((state) => state.user);
  const [isOff, setIsOff] = useState(true);
  const [success, setSuccess] = useState(false);
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

  // function makeButtonEnabled() {
  //   if (user.name !== "") {
  //     setIsOff(false);
  //   }
  //   if (user.surname !== "") {
  //     setIsOff(false);
  //   }
  //   if (user.email !== "") {
  //     setIsOff(false);
  //   }
  //   if (user.confirmEmail !== "") {
  //     setIsOff(false);
  //   }
  //   if (user.telNumber !== "") {
  //     setIsOff(false);
  //   }
  // }

  // useEffect(() => {
  //   setIsOff(true);
  //   makeButtonEnabled();
  // });



  function dispatchUserData(userData) {
    dispatch(takeName(userData.name));
    dispatch(takeSurname(userData.surname));
    dispatch(takeTel(userData.telNumber));
    dispatch(takeEmail(userData.email));
    dispatch(takeConfirmEmail(userData.confirmEmail));
  }

  function onSubmit(userData){
    dispatchUserData(userData)
  }
  return {
    onSubmit,
    register,
    errors,
    // handleFormInput,
    // userValues,
    handleSubmit,
    isOff,
    setIsOff,
    // user,
    success,
    setSuccess,
  };
}
