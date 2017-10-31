import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

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
  }
});
const AppBarHeader = props => {
  const { classes, toggleDrawer, handleDrawerOpen } = props;
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
        <Typography type="title" color="inherit" noWrap>
          Admin Interface
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles, { withTheme: true })(AppBarHeader);
