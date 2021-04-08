import { TAKE_AMOUNT, CALCULATE_ADVANCE, SELECT_INSTALLMENT, CALCULATE_FINALINSTALLMEMT} from '../../actionTypes'



export const takeAmount = (amount) => {
    return {
        type: TAKE_AMOUNT,
        payload: amount
    }
}
export const calcAdvance = () => {
    return {
        type: CALCULATE_ADVANCE,
    }
}
export const selectInstallment = (installNumber) => {
    return {
        type: SELECT_INSTALLMENT,
        payload: installNumber
    }
}
// export const takeTel = (text) => {
//     return {
//         type: TAKE_TEL,
//         payload: text
//     }
// }
// export const takeEmail = (text) => {
//     return {
//         type: TAKE_EMAIL,
//         payload: text
//     }
// }
// export const takeConfirmEmail = (text) => {
//     return {
//         type: TAKE_CONFIRMEMAIL,
//         payload: text
//     }
// }

