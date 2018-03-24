import React, { Component } from "react";
import { connect } from "react-redux";

// ACTIONS
import { fetchSpendings } from "../../actions";
// COMPONENTS
import SpendingList from './SpendingList';

class SpendingHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spendings: {
                listSpendings: []
            }
        }
    }
    async componentDidMount() {
        await this.props.fetchSpendings();
        this.setState({
            spendings: this.props.spendings
        });
    }
    onRemove = (i) => {
        const listRemove = this.state.spendings.listSpendings;
        listRemove.splice(i, 1);
        this.setState({
            spendings: {
                listSpendings: listRemove
            }
        });

    }
    render() {
        return (
            <div>
                <SpendingList
                    spendings={this.state.spendings}
                    onRemove={this.onRemove}
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