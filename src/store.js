import { createStore } from "redux";
import { combineReducers } from './reducers/index'
const initialState = {
};

function count(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.value + action.payload;
    case "DECREMENT":
      return state.value - action.payload;
    default:
      return state;
  }
}
const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;