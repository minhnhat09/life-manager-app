/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from "material-ui-icons/Restore";
import FavoriteIcon from "material-ui-icons/Favorite";
import LocationOnIcon from "material-ui-icons/LocationOn";

// COMPONENTS
import ProjectTodo from "./ProjectTodo";
import ProjectDoing from "./ProjectDoing";
import ProjectDone from "./ProjectDone";
const styles = {
  root: {
    width: "100%"
  }
};

class ProjectTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  renderContent() {
    switch (this.state.value) {
      case 0:
        return <ProjectTodo />;
      case 1:
        return <ProjectDoing />;
      case 2:
        return <ProjectDone />;
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label="To do" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Doing" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Done" icon={<LocationOnIcon />} />
        </BottomNavigation>
        {this.renderContent()}
      </div>
    );
  }
}
ProjectTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectTabs);
