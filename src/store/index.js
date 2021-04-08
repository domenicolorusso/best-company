import { combineReducers } from 'redux'
import installReducer from './features/install/installSlice'
import userReducer from './features/user/userSlice'


const rootReducer = combineReducers({
    install: installReducer, 
    user: userReducer
  })

  export default rootReducer