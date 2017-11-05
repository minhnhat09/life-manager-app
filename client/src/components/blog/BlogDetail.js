import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import List, { ListItem } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Chip from "material-ui/Chip";
// Markdown
import ReactMarkdown from "react-markdown";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BlogDetail extends Component {
  state = {
    open: false
  };
  componentWillMount() {
    console.log("componentWillMount");
    const { title, content, tags } = this.props.blogPost;
    this.setState({
      open: false,
      content,
      title,
      tags
    });
    console.log("this.props", this.props);
    console.log("this.state", this.state);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
    console.log("handleRequestClose", this.state);
  };

  onContentChange = name => input => {
    this.setState({ [name]: input.target.value });
    console.log(input, this.state);
  };

  submit = () => {
    console.log(this.state);
  };

  handleOnKeyPress = input => {
    if (input.key === "Enter") {
      const newTags = [...this.state.tags, input.target.value];
      this.setState({ tags: newTags });
      input.target.value = "";
    }
  };
  handleDeleteTag = index => () => {
    const tags = [...this.state.tags];
    tags.splice(index, 1);
    this.setState({ tags });
    console.log(index);
  };

  renderChips = () => {
    if (this.state.tags.length > 0) {
      return (
        <ListItem>
          {this.state.tags.map((tag, i) => (
            <Chip
              className={this.props.classes.chip}
              label={tag}
              key={i}
              onRequestDelete={this.handleDeleteTag(i)}
            />
          ))}
        </ListItem>
      );
    } else {
      return;
    }
  };
  render() {
    const { classes } = this.props;
    const { chip, appBar, flex } = classes;
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
          <AppBar className={appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                onClick={this.handleRequestClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={flex}>
                Sound
              </Typography>
              <Button color="contrast" onClick={this.submit}>
                Save
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
                    defaultValue={this.props.blogPost.title}
                    fullWidth
                    onChange={this.onContentChange("title")}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="tag"
                    label="Tag"
                    type="text"
                    onKeyPress={this.handleOnKeyPress}
                    placeholder="Add tag"
                    onChange={this.onContentChange("tag")}
                    fullWidth
                  />
                </ListItem>
                {this.renderChips()}
                <ListItem>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="content"
                    label="Content"
                    type="text"
                    multiline
                    defaultValue={this.props.blogPost.content}
                    rows="20"
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
