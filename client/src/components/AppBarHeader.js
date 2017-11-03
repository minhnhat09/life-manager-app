import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Button from "material-ui/Button";
import { CircularProgress } from "material-ui/Progress";
// REDUX
import { connect } from "react-redux";
const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  notUnderline: {
    textDecoration: "none"
  },
  flex: {
    flex: 1
  }
});
const renderContent = (auth, classes) => {
  switch (auth) {
    case null:
      return <CircularProgress size={50} />;
    case false:
      return (
        <a href="/auth/google" className={classes.notUnderline}>
          <Button color="contrast">Login With Google</Button>
        </a>
      );
    default:
      return (
        <a href="/api/logout" className={classes.notUnderline}>
          <Button color="contrast">Logout</Button>
        </a>
      );
  }
};
const AppBarHeader = props => {
  const { classes, toggleDrawer, handleDrawerOpen, auth } = props;
  const { menuButton, appBar, appBarShift, hide } = classes;

  return (
    <AppBar className={classNames(appBar, toggleDrawer && appBarShift)}>
      <Toolbar disableGutters={!toggleDrawer}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={classNames(menuButton, toggleDrawer && hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Admin Interface
        </Typography>
        {renderContent(auth, classes)}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(AppBarHeader)
);
