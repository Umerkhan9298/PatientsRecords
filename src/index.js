import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { bugAdded, bugResolved, fetchPatientData } from "./actions/actions";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

store.dispatch(bugAdded("Bug2"));

store.dispatch(bugResolved(1));

store.dispatch(fetchPatientData());

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
