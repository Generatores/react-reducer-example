import CounterReducer from "./CounterReducer";
import IsLogged from "./IsLogged";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
  CounterReducer: CounterReducer,
  IsLogged: IsLogged,
});

export default AllReducers;
