import React from "react";
import "./Detail.css";

import Switch from "./Switch";
import { convertTypeToColor } from "../Helper";
import ReturnBtn from "./ReturnBtn";
import EvoChain from "./EvolutionChain";

const PokeDexAPI = require("pokeapi-js-wrapper");
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSpinning: true };

    this.temp = false;
    this.changeHandler = this.changeHandler.bind(this);
    this.spinState = this.getSpinningState();
    this.pokedex = new PokeDexAPI.Pokedex(JSON.parse(props.pokedex));
    this.pokemon = props.pokemon;
    this.getSpinningState = this.getSpinningState.bind(this);

    this.setPageColors(this.pokemon);
    this.getPokemonInfo = this.getPokemonInfo.bind(this);

    this.getPokemonInfo();
  }

  setPageColors(pokemon) {
    if (pokemon?.types?.[0]) {
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

  async getPokemonInfo() {
    this.setState({ pokemon: await this.pokedex.getPokemonByName(this.pokemon.name) });
  }

  getSprite() {
    return this.state.pokemon.sprites.front_default;
  }

  getSpinningState() {
    return this.state.isSpinning;
  }

  render() {
    if (this.state?.pokemon) {
      return (
        <>
          <div className="position-absolute absolute-top-right padding-base">
            <Switch id="switch" isChecked={this.spinState} changeHandler={this.changeHandler} />
          </div>
          <ReturnBtn history={this.props.history} />

          <div className="card margin-bottom-m">
            <div className="pokemon__sprite margin-bottom-l">
              <div className={"pokemon-img " + (this.getSpinningState() ? "spin-3d" : "")}>
                <img src={this.getSprite()} alt={"Sprite of " + this.state.pokemon.name} />
                <div className="sprite-shadow"></div>
              </div>
            </div>
            <div className="pokemon__name margin-bottom-base">{this.state.pokemon.name}</div>
          </div>

          <div className="card margin-bottom-m">
            <EvoChain pokemon={this.state.pokemon} pokedex={this.pokedex}></EvoChain>
          </div>

          <div className="card margin-bottom-m"></div>
        </>
      );
    } else {
      return <div>Loading, please wait...</div>;
    }
  }
}

export default Detail;
