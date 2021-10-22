import React from "react";
import "./Detail.css";

import Switch from "./Switch";
import { convertTypeToColor } from "../Helper";
import ReturnBtn from "./ReturnBtn";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSpinning: true };

    this.changeHandler = this.changeHandler.bind(this);
    this.spinState = this.getSpinningState();
    this.pokemon = this.props.pokemon;

    this.setPageColors(this.pokemon);
  }

  setPageColors(pokemon) {
    if (pokemon.types?.[0]) {
      this.setVariableValue("--page-color-primary", pokemon.types[0]);
      if (pokemon.types?.[1]) {
        this.setVariableValue("--page-color-secondary", pokemon.types[1]);
      } else {
        this.setVariableValue("--page-color-secondary", pokemon.types[0]);
      }
    }
  }

  setVariableValue(variableName, value) {
    document.documentElement.style.setProperty(variableName, convertTypeToColor(value));
  }

  changeHandler(isSpinning) {
    this.setState({ isSpinning: isSpinning });
  }

  getSpinningState() {
    return this.state.isSpinning;
  }

  render() {
    return (
      <div className="content">
        <ReturnBtn history={this.props.history} />
        <div className="bg_curved"></div>
        <div className="pokemon">
          <div className={"pokemon-img " + (this.state.isSpinning ? "spin-3d" : "")}>
            <img src={this.pokemon.imgURL} alt={"Sprite of " + this.pokemon} />
            <div className="sprite-shadow"></div>
          </div>
        </div>
        <div>
          <label className="switch-label" htmlFor="switch">
            Enable Spin Animation
          </label>
          <Switch id="switch" isChecked={this.spinState} changeHandler={this.changeHandler} />
        </div>
      </div>
    );
  }
}

export default Detail;
