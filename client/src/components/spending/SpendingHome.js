import React, { Component } from "react";
import AddSpendingDialog from "./AddSpendingDialog";
import SpendingList from "./SpendingList";
import axios from "axios";
class SpendingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spendings: [
        {
          name: "auchan",
          amount: 15,
          type: "cb giang",
          date: "21-01-2001"
        }
      ]
    };
    this.onNewSpending = this.onNewSpending.bind(this);
  }

  onNewSpending(spending) {
    console.log("on new spending", spending);
    this.setState({
      spendings: [...this.state.spendings, spending]
    });
    this.saveToDb(spending);
  }

  async saveToDb(spending) {
    const res = await axios.post("/api/spendings", spending);
    console.log(res);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SpendingList spendings={this.state.spendings} />
        <AddSpendingDialog onNewSpending={this.onNewSpending} />
      </div>
    );
  }
}

export default SpendingHome;
