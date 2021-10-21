import "./Switch.css";
import React, { Component } from "react";

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: props.isChecked };
  }

  propagateChange(value) {
    this.props.changeHandler(value);
    this.setState({ isChecked: value });
  }

  render() {
    return (
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => {
            this.propagateChange(e.target.checked);
          }}
          defaultChecked={this.state.isChecked}
        />
        <span className="slider round"></span>
      </label>
    );
  }
}
