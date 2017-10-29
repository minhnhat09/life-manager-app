import React from "react";
import SpendingRow from "./SpendingRow";

const SpendingList = ({ spendings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {spendings.map((spending, i) => <SpendingRow key={i} {...spending} />)}
      </tbody>
    </table>
  );
};
export default SpendingList;
