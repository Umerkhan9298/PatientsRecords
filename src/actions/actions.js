import * as actions from "./actionTypes";
import axios from "axios";
const apiUrl = "https://jsonmock.hackerrank.com/api/medical_records";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

/* export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "BUG1",
    },
  };
}
 */

export const fetchPatientData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: actions.LOAD_PATIENT_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
};
