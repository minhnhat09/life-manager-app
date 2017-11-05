import React from "react";
import SpendingRow from "./SpendingRow";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import { CircularProgress } from "material-ui/Progress";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const SpendingList = props => {
  const { classes, spendings, onRemoveSpending = f => f } = props;
  const { listSpendings, loadingSpending } = spendings;
  if (!loadingSpending) {
    if (listSpendings.length > 0) {
      let total = 0;
      listSpendings.map(spending => (total += spending.amount));
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listSpendings.map((spending, i) => (
                <SpendingRow
                  key={i}
                  {...spending}
                  index={i}
                  onRemoveSpending={onRemoveSpending}
                />
              ))}
              <TableRow>
                <TableCell />
                <TableCell>{total}</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return (
        <Typography type="title" color="inherit">
          The list is empty
        </Typography>
      );
    }
  } else {
    return <CircularProgress size={50} />;
  }
};
export default withStyles(styles)(SpendingList);
