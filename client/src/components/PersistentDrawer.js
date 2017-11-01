/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { Route } from "react-router-dom";
//COMPONENTS
import Landing from "./Landing";
import DrawerDetail from "./DrawerDetail";
import AppBarHeader from "./AppBarHeader";
import SpendingHome from "./spending/SpendingHome";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  content: {
    width: "100%",
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      content: {
        height: "calc(100% - 64px)",
        marginTop: 64
      }
    }
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class PersistentDrawer extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { root, appFrame, content } = classes;
    const routes = [
      {
        path: "/spending",
        component: SpendingHome
      },
      {
        path: "/landing",
        component: Landing
      }
    ];
    return (
      <div className={root}>
        <div className={appFrame}>
          <AppBarHeader
            toggleDrawer={this.state.open}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <DrawerDetail
            toggleDrawer={this.state.open}
            handleDrawerClose={this.handleDrawerClose}
          />
          <main
            className={classNames(
              content,
              this.state.open && classes.contentShift
            )}
          >
            {routes.map((route, index) => (
              <Route key={index} exact path={route.path} component={route.component} />
            ))}
          </main>
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
