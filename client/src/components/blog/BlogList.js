import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
// COMPONENTS
import BlogRow from "./BlogRow";

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

const BlogList = props => {
  const { classes, blogs } = props;
  if (blogs) {
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Like</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog, i) => (
              <BlogRow key={i} {...blog} />
            ))}
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
};
export default withStyles(styles)(BlogList);
