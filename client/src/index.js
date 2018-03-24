import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

// React redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
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


const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
