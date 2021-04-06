import { combineReducers } from 'redux'
import firstReducer from './firstReducer'
//importa tutti i reducer per poi esportarli ed importarli nello store

export default combineReducers({
    //inserisci qui i reducers
    firstReducer
})