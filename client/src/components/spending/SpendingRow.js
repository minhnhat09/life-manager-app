import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
// COMPONENTS
import { TableCell, TableRow } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Button from "material-ui/Button";
// COLORS
import blueGrey from "material-ui/colors/blueGrey";
import red from "material-ui/colors/red";
// ICONS
import Delete from "material-ui-icons/Delete";
import Brush from "material-ui-icons/Brush";
// REDUX
import { connect } from "react-redux";
// ACTIONS
import { fetchSpendings, deleteSpending } from "../../actions";

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit
  },
  iconHover: {
    fill: blueGrey[500],
    "&:hover": {
      fill: red[500]
    }
  }
});

class RemoveSpendingDialog extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  onRemoveSpending = () => {
    this.props.onRemoveSpending(this.props.index);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Delete
          onClick={this.handleClickOpen}
          className={classNames(
            this.props.classes.icon,
            this.props.classes.iconHover
          )}
        />
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"Delete this spending ?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to delete this spending ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onRemoveSpending} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const SpendingRow = props => {
  console.log(props);
  const {
    name,
    amount,
    type,
    date,
    classes,
    _id,
    onRemoveSpending = f => f
  } = props;
  const { icon } = classes;
  return (
    <TableRow>
      <TableCell>
        <Typography>{name}</Typography>
      </TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <IconButton>
          <Brush className={icon} />
        </IconButton>
        <IconButton>
          <RemoveSpendingDialog
            classes={classes}
            index={_id}
            onRemoveSpending={onRemoveSpending}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

SpendingRow.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default withStyles(styles)(SpendingRow);
