/* eslint-disable flowtype/require-valid-file-annotation */

import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import AddIcon from "material-ui-icons/Add";
const fabStyle = {
  bottom: 20,
  right: 20,
  position: "fixed"
};
export default class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          fab
          color="primary"
          aria-label="add"
          onClick={this.handleClickOpen}
          style={fabStyle}
        >
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occationally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Số tiền"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ngày tháng"
              type="date"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tên"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Add Spending
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
