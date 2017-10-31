import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import AppBarButton from "./AppBarButton";
import "typeface-roboto";
// COMPONENTS
import SpendingHome from "./spending/SpendingHome";
import PersistentDrawer from "./PersistentDrawer";
// import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={PersistentDrawer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
