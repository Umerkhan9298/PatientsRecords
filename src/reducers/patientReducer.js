import * as actions from "../actions/actionTypes";

export function patientReducer(state = [], action) {
  switch (action.type) {
    case actions.LOAD_PATIENT_SUCCESS:
      return [...state, { patientRecordList: action.payload }];
    default:
      return state;
  }
}
