import {
  TAKE_AMOUNT,
  TAKE_ADVANCE,
  SELECT_INSTALLMENT,
  CALCULATE_FINALINSTALLMENT,
  CALCULATE_INSTALLMENTVALUES,
  IMPORTO_FINANZIATO,
  COSTI_FINANZIAMENTO,
  IMPORTO_RIMBORSARE,
  SPESA_ISTRUTTORIA,
  SPESA_INCASSO,
  IMPOSTA_BOLLO,
  TAN,
  TAEG
} from "../../actionTypes";



const price = 15000;

const installmentState = {
  price,
  amount: price,
  advance: 0,
  installments: 0,
  installmentsValues: [0, 0, 0],
  finalInstallment: 0,
  importoFinanziato: 0,
  costiFinanziamento: 0,
  importoRimborsare: 0,
  spesaIstruttoria: 0,
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
        //  calcAdvance(state.price, state.amount)
      };
    case CALCULATE_INSTALLMENTVALUES:
      return {
        ...state,
        installmentsValues: action.payload,
        //  calcInstallmentValues(state.price, state.amount)
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


      ///////////// DA QUI RICREATE TUTTE LE COSTANTI REDUX /////////////
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
    case SPESA_ISTRUTTORIA:
      return {
        ...state,
        spesaIstruttoria: action.payload,
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
