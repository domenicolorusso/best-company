
import {  TAKE_NAME, TAKE_SURNAME, TAKE_TEL, TAKE_EMAIL, TAKE_CONFIRMEMAIL   } from '../../actionTypes'



const userState = {
   name:'',
   surname: '',
   telNumber: '',
   email: '',
   confirmEmail: ''
  };



export default function userReducer( state = userState, action){
    switch (action.type) {
     case TAKE_NAME:
         return{
             ...state,
             name: action.payload
         }
     case TAKE_SURNAME:
         return{
             ...state,
             surname: action.payload
         }
     case TAKE_TEL:
         return{
             ...state,
             telNumber: action.payload
         }
     case TAKE_EMAIL:
         return{
             ...state,
             email: action.payload
         }
     case TAKE_CONFIRMEMAIL:
         return{
             ...state,
             confirmEmail: action.payload
         }
     default:
         return state

}}