/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { Route } from "react-router-dom";
//COMPONENTS
import DrawerDetail from "./header/DrawerDetail";
import AppBarHeader from "./header/AppBarHeader";
import SpendingHome from "./spending/SpendingHome";
import BlogHome from "./blog/BlogHome";
import ProjectHome from "./project/ProjectHome";
import MotivationHome from "./motivation/MotivationHome";
import NewsHome from "./news/NewsHome";
import BookReviewHome from "./book-review/BookReviewHome";

const drawerWidth = 0;

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 0,
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%"
  },
  content: {
    width: "100%",
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: "white",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      content: {
        marginTop: 64
      }
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
export const Whoops404 = () => (
  <div>
    <h1>Whoops, route not found</h1>
  </div>
);
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
    const { root, appFrame, content, contentShift } = classes;
    const routes = [
      {
        path: "/spending",
        component: SpendingHome
      },
      {
        path: "/blog",
        component: BlogHome
      },
      {
        path: "/project",
        component: ProjectHome,
        routes: [
          {
            path: "/todo",
            component: Whoops404
          },
          {
            path: "/doing",
            component: ProjectHome
          },
          {
            path: "/done",
            component: ProjectHome
          }
        ]
      },
      {
        path: "/motivation",
        component: MotivationHome
      },
      {
        path: "/news",
        component: NewsHome
      },
      {
        path: "/book-review",
        component: BookReviewHome
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
              content, this.state.open && contentShift
            )}
          >
            {routes.map((route, index) => {
              return <RouteWithSubRoutes exact key={index} {...route} />;
            })}
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
