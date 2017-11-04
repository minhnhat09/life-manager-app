import React, { Component } from "react";
import { connect } from "react-redux";
// COMPONENTS
import BlogList from "./BlogList";
class BlogHome extends Component {
  render() {
    console.log("blogs", this.props);
    return (
      <div>
        <BlogList blogs={this.props.blogs} />
      </div>
    );
  }
}
const mapStateToProps = ({ blogs }) => {
  return { blogs };
};
export default connect(mapStateToProps, null)(BlogHome);
