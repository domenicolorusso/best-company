import {    TAKE_AMOUNT, CALCULATE_ADVANCE, SELECT_INSTALLMENT, CALCULATE_FINALINSTALLMEMT } from '../../actionTypes'

const installment = [24, 36, 48]; 

const price = 15000;



const installmentState = {
    price,
    amount: price,
    advance: 0,
    installments: installment[0],
    finalInstallment: 0
  };


function calcAdvance(price, amount){
    return price - amount

}

export default function installReducer( state = installmentState, action){
    switch (action.type) {
     case TAKE_AMOUNT:
         return{
             ...state,
             amount: action.payload
         }
     case CALCULATE_ADVANCE:
         return{
             ...state,
             advance: calcAdvance(state.price, state.amount)
         }
     case SELECT_INSTALLMENT:
         return{
             ...state,
             installments: installment[action.payload]
         }
         //da capire come calcolare
     case CALCULATE_FINALINSTALLMEMT:
         return{
             ...state,
             finalInstallment: action.payload
         }
     default:
         return state

}}