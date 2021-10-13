import React from "react";
import "./Detail.css";

import Switch from "./Switch";
import { convertTypeToColor } from "../Helper";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSpinning: true };
    this.setPageColors(this.props.route.params.pokemon);
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

  updateSpin = (val) => {
    console.log(val);
    this.setState({
      isSpinning: val,
    });
  };

  render() {
    const { pokemon } = this.props.route.params;
    return (
      <div className="content">
        <button className="btn return" onClick={() => this.props.navigation.goBack()}>
          <div className="arrow">&#10147;</div> Return
        </button>
        <div className="bg_curved"></div>
        <div className="pokemon">
          <div className={"pokemon-img " + (this.state.isSpinning ? "spin-3d" : "")}>
            <img src={pokemon.imgURL} alt={"Sprite of " + pokemon} />
            <div className="sprite-shadow"></div>
          </div>
        </div>
        <div>
          <label className="switch-label" htmlFor="switch">
            Disable Spin Animation
          </label>
          <Switch id="switch" changeHandler={this.updateSpin} />
        </div>
      </div>
    );
  }
}

export default Detail;
