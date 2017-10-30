import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
// REDUX
import { connect } from "react-redux";
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
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
    console.log(classes);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
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

/* AppBarButton.propTypes = {
  classes: PropTypes.object.isRequired
}; */

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(withStyles(styles)(AppBarButton));
