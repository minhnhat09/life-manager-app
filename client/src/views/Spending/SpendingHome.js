import React, { Component } from "react";
import { connect } from "react-redux";

// ACTIONS
import { fetchSpendings } from "../../actions";
// COMPONENTS
import SpendingList from './SpendingList';

class SpendingHome extends Component {
    componentDidMount() {
        this.props.fetchSpendings();
    }
    render() {
        return (
            <div>
                <SpendingList
                    spendings={this.props.spendings}
                />
            </div>
        );
    }
}


const mapStateToProps = ({ spendings }) => {
    return { spendings };
};
export default connect(mapStateToProps, {
    fetchSpendings
})(SpendingHome);