import React, { Component } from "react";
import AddSpendingDialog from "./AddSpendingDialog";
import SpendingList from "./SpendingList";

class SpendingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spendings: [
        {
          name: "auchan",
          amount: 15,
          type: "cb giang",
          date: "2001-01-2001"
        }
      ]
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SpendingList spendings={this.state.spendings} />
        <AddSpendingDialog />
      </div>
    );
  }
}

export default SpendingHome;
