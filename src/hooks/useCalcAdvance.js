import { useDispatch, useSelector } from "react-redux";
import {
  takeAmount,
  takeAdvance,
  selectInstallment,
} from "../store/features/install/installActions";

export default function useCalcAdvance() {
  const dispatch = useDispatch();
  const installValues = useSelector((state) => state.install);

  const calc = (price, amount) => {
    return price - amount;
  };
  function handldeAdvanceCalculation(e) {
    dispatch(takeAdvance(calc(installValues.price, e.target.value)));
    dispatch(takeAmount(parseInt(e.target.value)));
  }

  function handleMonthsInstallment(installNumberArray) {
    dispatch(selectInstallment(installNumberArray));
  }
  return [ handldeAdvanceCalculation, handleMonthsInstallment, installValues ];
}
