import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { connect } from "react-redux";
class LeftDownComponent extends Component {
  render() {
    return (
      <div class="container">
        <div
          class="col"
          style={{
            background: "#fc7500",
            borderRadius: "5px",
            margin: "5% 0",
          }}
        >
          <div class="row" style={{ padding: "5% 0 0 40%" }}>
            <MyScreen key={1} tech={this.props.selected} />
          </div>
          <div class="row" style={{ padding: "5% 0 10% 30%" }}>
            <ButtonGroup
              key={2}
              side="leftDown"
              technologies={["Button A", "Button B", "Button C"]}
            />
            <button onClick={this.props.handleReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    selected: state.selected2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch({ type: "RESET2" }),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(LeftDownComponent);
