import { combineReducers } from "redux";
import TodoReducer from "../Todo/List/Reducer";

export default combineReducers({
  todo: TodoReducer
});
