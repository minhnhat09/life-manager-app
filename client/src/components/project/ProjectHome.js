import React, { Component } from "react";
import ProjectTabs from "./ProjectTabs";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
const styles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class ProjectHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ProjectTabs />
      </div>
    );
  }
}

export default withStyles(styles)(ProjectHome);
