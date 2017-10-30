import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "material-ui/Table";

const SpendingRow = ({ name, amount, type, date }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{amount}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>{date}</TableCell>
  </TableRow>
);

SpendingRow.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};
export default SpendingRow;
