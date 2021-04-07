import { combineReducers } from 'redux'
import installReducer from '../features/install/installSlice'
//importa tutti i reducer per poi esportarli ed importarli in store (createStore)

const rootReducer = combineReducers({
    install: installReducer, 
  })

  export default rootReducer