import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// MUI
import Button from "material-ui/Button";
// COMPONENTS
import AddSpendingDialog from "./AddSpendingDialog";
import SpendingList from "./SpendingList";
import { CircularProgress } from "material-ui/Progress";
// ACTIONS
import { fetchSpendings, addSpending } from "../../actions";

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
    this.props.addSpending(spending);
    // this.props.fetchSpendings();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.props.spendings ? (
          <SpendingList spendings={this.props.spendings} />
        ) : (
          <CircularProgress size={50} />
        )}
        <AddSpendingDialog onNewSpending={this.onNewSpending} />
      </div>
    );
  }
}
const mapStateToProps = ({ spendings }) => {
  return { spendings };
};
export default connect(mapStateToProps, { fetchSpendings, addSpending })(
  SpendingHome
);
