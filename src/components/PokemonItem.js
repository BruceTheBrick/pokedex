import "./PokemonItem.css";
import PkBall from "../assets/pkball-icon.png";

import Loading from "./SkeletonLoader";

import React, { Component } from "react";

class PokemonItem extends Component {
  constructor(props) {
    super(props);

    this.getPokemonInfo();
  }

  async getPokemonInfo() {
    this.setState({ details: await this.props.pokedex.getPokemonByName(this.props.pokemon.name) });
  }

  getId() {
    let res = "";
    let id = this.state.details.id;
    res += id;
    while (res.length < 3) {
      res = "0" + res;
    }
    return res;
  }

  getSprite() {
    return this.state.details.sprites.front_default;
  }

  getTypes() {
    let types = [];
    this.state.details.types.forEach((type) => {
      types.push(type.type.name);
    });

    return types;
  }

  render() {
    if (this?.state?.details) {
      const pokemon = this.state.details;
      return (
        <div className={"list-item fadeIn bg_" + this.getTypes()[0]}>
          <div className="header">
            <div className="name">{pokemon.name}</div>
            <div className="id">#{this.getId()}</div>
          </div>
          <div className="body">
            <div className="types">
              {this.getTypes().map((type) => {
                return (
                  <div key={type} className="type">
                    {type}
                  </div>
                );
              })}
            </div>
            <div className="sprite">
              <img src={this.getSprite()} alt={pokemon.name} title={pokemon.name}></img>
            </div>
          </div>
          <div className="background-image">
            <img src={PkBall} alt="" />
          </div>
        </div>
      );
    } else {
      return <Loading></Loading>;
    }
  }
}

PokemonItem.defaultProps = {
  pokemon: {
    id: 0,
    name: "Missingno.",
    types: ["NaN"],
  },
};

export default PokemonItem;
