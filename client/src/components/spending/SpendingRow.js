import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import moment from 'moment';
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
    this.onRemoveSpending = this.onRemoveSpending.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  state = {
    open: false
  };
  onRemoveSpending() {
    this.setState({ open: false });
    this.props.onRemoveSpending(this.props.index);
  }

  handleRequestClose() {
    this.setState({ open: false });
  }
  render() {
    const { icon, iconHover } = this.props.classes;
    return (
      <div>
        <Delete
          onClick={() =>
            this.setState({
              open: true
            })}
          className={classNames(icon, iconHover)}
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

class SpendingRow extends Component {
  state = {
    open: false
  };
  render() {
    const {
      name,
      amount,
      type,
      date,
      classes,
      _id,
      onRemoveSpending = f => f
    } = this.props;
    
    const { icon } = classes;
    return (
      <TableRow>
        <TableCell>
          <Typography>{name}</Typography>
        </TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{moment(date).format('DD/MM/YYYY')}</TableCell>
        <TableCell>
          <IconButton>
            <Brush className={icon} />
          </IconButton>
          <IconButton>
            <RemoveSpendingDialog
              classes={classes}
              index={_id}
              onOpenDialog={this.state.open}
              onRemoveSpending={onRemoveSpending}
            />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

SpendingRow.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default withStyles(styles)(SpendingRow);
