import React from "react";
import { TableCell, TableRow } from "material-ui/Table";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import BlogDetail from "./BlogDetail";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  }
});

const BlogRow = props => {
  console.log(props);
  const { title } = props;
  return (
    <TableRow>
      <TableCell>
        <Typography>{title}</Typography>
      </TableCell>
      <TableCell />
      <TableCell />
      <TableCell>
        <BlogDetail />
      </TableCell>
    </TableRow>
  );
};
export default withStyles(styles)(BlogRow);
