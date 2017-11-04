import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
// Markdown
import ReactMarkdown from "react-markdown";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BlogDetail extends Component {
  state = {
    open: false,
    content: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  onContentChange = name => input => {
    this.setState({ [name]: input.target.value });
  };

  render() {
    const { classes } = this.props;
    let contentValue;
    return (
      <div>
        <Button raised color="accent" onClick={this.handleClickOpen}>
          Modify
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                onClick={this.handleRequestClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="contrast" onClick={this.handleRequestClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="content"
                    label="Content"
                    type="text"
                    multiline
                    rows="10"
                    fullWidth
                    onChange={this.onContentChange("content")}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ReactMarkdown source={this.state.content} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

BlogDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogDetail);
