import React from "react";

const SpendingRow = ({ name, amount, type, date }) => (
  <tr>
    <td>{name}</td>
    <td>{amount}</td>
    <td>{type}</td>
    <td>{date}</td>
  </tr>
);
export default SpendingRow;
