import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import PropTypes from "prop-types";
// REDUX
import { connect } from "react-redux";
const drawerWidth = 240;
const styles = theme => ({
  root: {
    width: "100%",
    height: 430,
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
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
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
  },
  notUnderline: {
    textDecoration: "none"
  }
});
class AppBarButton extends Component {
  renderContent(classes) {
    switch (this.props.auth) {
      case null:
        return;
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
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
              onClick={this.props.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              App Chi tiêu
            </Typography>
            {this.renderContent(classes)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBarButton.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(withStyles(styles)(AppBarButton));
