/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
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
export default class AddSpendingDialog extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      open: false,
      _name: "",
      _amount: "0",
      _type: "",
      _date: ""
    };
    console.log(this.state);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  submit(e) {
    e.preventDefault();
    this.props.onNewSpending({
      name: this.state._name.value,
      amount: Number(this.state._amount.value),
      type: this.state._type.value,
      date: this.state._date.value
    });
    this.setState({ open: false });
  }

  render() {
    const { name, amount, type, date } = this.props;
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
          <form>
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
                inputRef={input => this.setState({ _name: input })}
                label="Name"
                defaultValue={name}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="amount"
                inputRef={input => this.setState({ _amount: input })}
                label="Amount"
                defaultValue={amount}
                type="number"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="type"
                inputRef={input => this.setState({ _type: input })}
                label="Type"
                defaultValue={type}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="date"
                inputRef={input => this.setState({ _date: input })}
                label="Date"
                type="date"
                defaultValue={date}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.submit} color="primary">
                Add Spending
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AddSpendingDialog.defaultProps = {
  name: "Auchan",
  amount: "11",
  type: "cb minh",
  date: "10/30/2017"
};
