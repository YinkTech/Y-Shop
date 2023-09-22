import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer } from "./reducer";

export const rootReducer = combineReducers({
  itemReducer,
  selectedItemReducer,
});
