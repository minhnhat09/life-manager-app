import React from "react";
import SpendingRow from "./SpendingRow";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";

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
  const { classes, spendings } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spendings.map((spending, i) => (
            <SpendingRow key={i} {...spending} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default withStyles(styles)(SpendingList);
