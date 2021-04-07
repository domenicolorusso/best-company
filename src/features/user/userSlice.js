
import {  TAKE_NAME, TAKE_SURNAME, TAKE_TEL, TAKE_EMAIL, TAKE_CONFIRMEMAIL   } from '../../actions/types'



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
             name: action.playload
         }
     case TAKE_SURNAME:
         return{
             ...state,
             surname: action.playload
         }
     case TAKE_TEL:
         return{
             ...state,
             telNumber: action.playload
         }
     case TAKE_EMAIL:
         return{
             ...state,
             email: action.playload
         }
     case TAKE_CONFIRMEMAIL:
         return{
             ...state,
             confirmEmail: action.playload
         }
     default:
         return state

}}