import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// COMPONENTS
import AddSpendingDialog from "./AddSpendingDialog";
import SpendingList from "./SpendingList";
// ACTIONS
import { fetchSpendings, addSpending, deleteSpending } from "../../actions";

class SpendingHome extends Component {
  constructor(props) {
    super(props);
    this.onNewSpending = this.onNewSpending.bind(this);
    this.onRemoveSpending = this.onRemoveSpending.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpendings();
    console.log(this.props);
  }

  async getSpendingsByUser() {
    const res = await axios.get("/api/spendings");
    console.log("getSpendingsByUser", res);
  }

  onNewSpending(spending) {
    this.props.addSpending(spending);
  }

  onRemoveSpending(index) {
    this.props.deleteSpending(index);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SpendingList
          spendings={this.props.spendings}
          onRemoveSpending={this.onRemoveSpending}
        />
        <AddSpendingDialog onNewSpending={this.onNewSpending} />
      </div>
    );
  }
}
const mapStateToProps = ({ spendings }) => {
  return { spendings };
};
export default connect(mapStateToProps, {
  fetchSpendings,
  addSpending,
  deleteSpending
})(SpendingHome);
