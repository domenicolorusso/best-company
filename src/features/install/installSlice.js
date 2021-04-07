import {    TAKE_AMOUNT, CALCULATE_ADVANCE, SELECT_INSTALLMENT, CALCULATE_FINALINSTALLMEMT } from '../../actions/types'

const installment = [24, 36, 48]; 


const InstallmentState = {
    price: 15000,
    amount: 0,
    advance: 0,
    installments: installment[0],
    finalInstallment: 0
  };


function calcAdvance(price, amount){
    return price - amount

}

export default function installReducer( state = InstallmentState, action){
    switch (action.type) {
     case TAKE_AMOUNT:
         return{
             ...state,
             amount: action.playload
         }
     case CALCULATE_ADVANCE:
         return{
             ...state,
             advance: calcAdvance(state.price, state.amount)
         }
     case SELECT_INSTALLMENT:
         return{
             ...state,
             installments: installment[action.playload]
         }
     case CALCULATE_FINALINSTALLMEMT:
         return{
             ...state,
             finalInstallment: action.playload
         }
     default:
         return state

}}