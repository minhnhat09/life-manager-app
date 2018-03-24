import React, { Component } from "react";
import { connect } from "react-redux";

// ACTIONS
import { fetchSpendings } from "../../actions";
// COMPONENTS
import SpendingList from "./SpendingList";
import SpendingForm from "./SpendingForm";
class SpendingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spendings: {
        listSpendings: []
      }
    };
  }
  async componentDidMount() {
    await this.props.fetchSpendings();
    this.setState({
      spendings: this.props.spendings
    });
  }
  onRemove = i => {
    const listRemove = this.state.spendings.listSpendings;
    listRemove.splice(i, 1);
    this.setState({
      spendings: {
        listSpendings: listRemove
      }
    });
  };

  openForm = () => {
    this.setState({
      ...this.state,
      formShowed: true
    });
  };

  returnToList = () => {
    this.setState({
      ...this.state,
      formShowed: false
    });
  };

  render() {
    if (this.state.formShowed) {
      return <SpendingForm returnToList={this.returnToList} />;
    } else {
      return (
        <SpendingList
          spendings={this.state.spendings}
          onRemove={this.onRemove}
          openForm={this.openForm}
        />
      );
    }
  }
}

const mapStateToProps = ({ spendings }) => {
  return { spendings };
};
export default connect(mapStateToProps, {
  fetchSpendings
})(SpendingHome);
