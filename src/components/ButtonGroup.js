import React, { Component } from "react";
import { connect } from "react-redux";
class ButtonGroup extends Component {
  render() {
    return (
      <div>
        {this.props.technologies.map((tech, i) => (
          <button onClick={() => this.props.handleClick(tech, this.props.side)}>
            {tech}
          </button>
        ))}
      </div>
    );
  }
}
const mapStoreToProps = (state, props) => {
  return {
    key: props.key,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (id, side) => dispatch({ type: side, key: id }),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(ButtonGroup);
