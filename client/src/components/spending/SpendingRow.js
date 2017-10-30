import React from "react";
import PropTypes from 'prop-types';
const SpendingRow = ({ name, amount, type, date }) => (
  <tr>
    <td>{name}</td>
    <td>{amount}</td>
    <td>{type}</td>
    <td>{date}</td>
  </tr>
);

SpendingRow.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};
export default SpendingRow;
