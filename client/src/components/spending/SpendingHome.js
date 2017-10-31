import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// MUI
import Button from "material-ui/Button";
// COMPONENTS
import AddSpendingDialog from "./AddSpendingDialog";
import SpendingList from "./SpendingList";
// ACTIONS
import { fetchSpendings } from "../../actions";

class SpendingHome extends Component {
  constructor(props) {
    super(props);
    this.onNewSpending = this.onNewSpending.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpendings();
  }

  async getSpendingsByUser() {
    const res = await axios.get("/api/spendings");
    console.log("getSpendingsByUser", res);
  }

  onNewSpending(spending) {
    console.log("on new spending", spending);
    this.saveToDb(spending);
  }

  async saveToDb(spending) {
    const res = await axios.post("/api/spendings", spending);
    console.log(res);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SpendingList spendings={this.props.spendings} />
        <Button onClick={this.getSpendingsByUser}>Spending page </Button>
        <AddSpendingDialog onNewSpending={this.onNewSpending} />
      </div>
    );
  }
}
const mapStateToProps = ({ spendings }) => {
  return { spendings };
};
export default connect(mapStateToProps, { fetchSpendings })(SpendingHome);
