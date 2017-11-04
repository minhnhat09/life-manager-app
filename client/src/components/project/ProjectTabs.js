/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";
import RestoreIcon from "material-ui-icons/Restore";
import FavoriteIcon from "material-ui-icons/Favorite";
import LocationOnIcon from "material-ui-icons/LocationOn";

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

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

ProjectTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectTabs);
