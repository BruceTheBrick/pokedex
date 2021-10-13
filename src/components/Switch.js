import "./Switch.css";
import React, { Component } from "react";

export default class Switch extends Component {
  constructor(props) {
    super(props);
  }

  propagateChange(value) {
    this.props.changeHandler(value);
  }

  render() {
    return (
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => {
            this.propagateChange(e.target.checked);
          }}
        />
        <span className="slider round"></span>
      </label>
    );
  }
}
