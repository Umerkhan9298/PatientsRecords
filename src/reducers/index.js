import { combineReducers } from "redux";
import { bugReducer } from "./bugReducer";
import { patientReducer } from "./patientReducer";

export const rootReducer = combineReducers({
  bug: bugReducer,
  patient: patientReducer,
});
