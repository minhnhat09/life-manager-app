import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import { Link } from "react-router-dom";
// ICONS
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import FilterListIcon from "material-ui-icons/FilterList";
import FlightTakeoffIcon from "material-ui-icons/FlightTakeoff";
import ExploreIcon from "material-ui-icons/Explore";
import ChatIcon from "material-ui-icons/Chat";
import BookIcon from "material-ui-icons/Book";
import { cyan } from "material-ui/colors";
const primary = cyan[400];

const drawerWidth = 240;
const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: primary
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  notUnderline: {
    textDecoration: "none"
  }
});

const links = [
  {
    to: "/",
    primary: "Home",
    icon: <InboxIcon />
  },
  {
    to: "/spending",
    primary: "Spending",
    icon: <DraftsIcon />
  },
  {
    to: "/blog",
    primary: "Blog post",
    icon: <FilterListIcon />
  },
  {
    to: "/project",
    primary: "Project Management",
    icon: <ExploreIcon />
  },
  {
    to: "/motivation",
    primary: "Motivation Boost",
    icon: <FlightTakeoffIcon />
  },
  {
    to: "/news",
    primary: "News",
    icon: <ChatIcon />
  },
  {
    to: "/book-review",
    primary: "Book Reviews",
    icon: <BookIcon />
  }
];

const DrawerDetail = props => {
  const { classes, theme, toggleDrawer, handleDrawerClose } = props;
  const { drawerPaper, drawerInner, drawerHeader, notUnderline } = classes;
  return (
    <Drawer
      type="persistent"
      classes={{
        paper: drawerPaper
      }}
      open={toggleDrawer}
    >
      <div className={drawerInner}>
        <div className={drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map((link, index) => (
            <Link  onClick={handleDrawerClose} key={index} to={link.to} className={notUnderline}>
              <ListItem button>
                <ListItemIcon style={{ color: "white" }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  style={{ color: "white" }}
                  primary={link.primary}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
export default withStyles(styles, { withTheme: true })(DrawerDetail);
