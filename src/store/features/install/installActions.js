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
    TAEG
  } from "../../actionTypes";



export const takeAmount = (amount) => {
    return {
        type: TAKE_AMOUNT,
        payload: amount
    }
}
export const takeAdvance = (result) => {
    return {
        type: TAKE_ADVANCE,
        payload: result
    }
}
export const selectInstallment = (installNumber) => {
    return {
        type: SELECT_INSTALLMENT,
        payload: installNumber
    }
}
export const rataMensile = (object) => {
    return {
        type: RATA_MENSILE,
        payload: object
    }
}
export const calculateFinalInstallment = (installNumber) => {
    return {
        type: CALCULATE_FINALINSTALLMENT,
        payload: installNumber
    }
}

export const importoFinanziato = (installNumber) => {
    return {
        type: IMPORTO_FINANZIATO,
        payload: installNumber
    }
}
export const costiFinanziamento = (installNumber) => {
    return {
        type: COSTI_FINANZIAMENTO,
        payload: installNumber
    }
}
export const importoRimborsare = (installNumber) => {
    return {
        type: IMPORTO_RIMBORSARE,
        payload: installNumber
    }
}
export const speseIstruttoria = (installNumber) => {
    return {
        type: SPESE_ISTRUTTORIA,
        payload: installNumber
    }
}
export const spesaIncasso = (installNumber) => {
    return {
        type: SPESA_INCASSO,
        payload: installNumber
    }
}
export const impostaBollo = (installNumber) => {
    return {
        type: IMPOSTA_BOLLO,
        payload: installNumber
    }
}
export const tan = (installNumber) => {
    return {
        type: TAN,
        payload: installNumber
    }
}
export const taeg = (installNumber) => {
    return {
        type: TAEG,
        payload: installNumber
    }
}


