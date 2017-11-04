import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { pink, green, teal, red, cyan, orange } from "material-ui/colors";
import reducers from "./reducers";
const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log("before", store.getState());
  result = next(action);
  console.log("after", store.getState());
  console.groupEnd();
  return result;
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk, consoleMessages));
const store = createStore(reducers, enhancer);
const theme = createMuiTheme({
  palette: {
    primary: {
      ...cyan,
      500: "#26c6da"
    },
    secondary: {
      ...red,
      A200: "#FF8A80"
    }
  },
  status: {
    danger: "orange"
  }
});
console.log(theme);
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
