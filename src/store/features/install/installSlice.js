import {
  TAKE_AMOUNT,
  TAKE_ADVANCE,
  SELECT_INSTALLMENT,
  RATA_MENSILE,
  CALCULATE_FINALINSTALLMENT,
  IMPORTO_FINANZIATO,
  COSTI_FINANZIAMENTO,
  IMPORTO_RIMBORSARE,
  SPESE_ISTRUTTORIA,
  SPESA_INCASSO,
  IMPOSTA_BOLLO,
  TAN,
  TAEG,
} from "../../actionTypes";
import { rataMensile } from "./installActions";

const price = 15000;

const installmentState = {
  price,
  amount: price,
  advance: 0,
  installments: 24,
  rataMensile: 0,
  finalInstallment: 0,
  importoFinanziato: 0,
  costiFinanziamento: 0,
  importoRimborsare: 0,
  speseIstruttoria: 0,
  spesaIncasso: 0,
  impostaBollo: 0,
  tan: 0,
  taeg: 0,
};

export default function installReducer(state = installmentState, action) {
  switch (action.type) {
    case TAKE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case TAKE_ADVANCE:
      return {
        ...state,
        advance: action.payload,
      };
    case RATA_MENSILE:
      return {
        ...state,
        rataMensile: action.payload,
      };

    case SELECT_INSTALLMENT:
      return {
        ...state,
        installments: action.payload,
      };

    case CALCULATE_FINALINSTALLMENT:
      return {
        ...state,
        finalInstallment: action.payload,
      };

    case IMPORTO_FINANZIATO:
      return {
        ...state,
        importoFinanziato: action.payload,
      };
    case COSTI_FINANZIAMENTO:
      return {
        ...state,
        costiFinanziamento: action.payload,
      };
    case IMPORTO_RIMBORSARE:
      return {
        ...state,
        importoRimborsare: action.payload,
      };
    case SPESE_ISTRUTTORIA:
      return {
        ...state,
        speseIstruttoria: action.payload,
      };
    case SPESA_INCASSO:
      return {
        ...state,
        spesaIncasso: action.payload,
      };
    case IMPOSTA_BOLLO:
      return {
        ...state,
        impostaBollo: action.payload,
      };
    case TAN:
      return {
        ...state,
        tan: action.payload,
      };
    case TAEG:
      return {
        ...state,
        taeg: action.payload,
      };
    default:
      return state;
  }
}
