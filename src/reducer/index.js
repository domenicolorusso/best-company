import { combineReducers } from 'redux'
import installReducer from '../features/install/installSlice'
import userReducer from '../features/user/userSlice'
//importa tutti i reducer per poi esportarli ed importarli in store (createStore)

const rootReducer = combineReducers({
    install: installReducer, 
    user: userReducer
  })

  export default rootReducer