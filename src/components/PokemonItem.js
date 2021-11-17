import "./PokemonItem.css";
import PkBall from "../assets/pkball-icon.png";

import React, { Component } from "react";

class PokemonItem extends Component {
  constructor(props) {
    super(props);

    this.getPokemonInfo();
  }

  async getPokemonInfo() {
    this.details = await this.props.pokedex.getPokemonByName(this.props.pokemon.name);
  }

  getId() {
    let res = "";
    let id = this?.details?.id || 0;
    res += id;
    while (res.length < 3) {
      res = "0" + res;
    }
    return res;
  }

  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div className={"list-item bg_" + this?.details?.types[0]}>
        <div className="header">
          <div className="name">{pokemon.name}</div>
          <div className="id">#{this.getId()}</div>
        </div>
        <div className="body">
          <div className="types">
            {this?.details?.types.map((type) => {
              return (
                <div key={type} className="type">
                  {type}
                </div>
              );
            })}
          </div>
          <div className="sprite">
            <img src={pokemon.imgURL} alt={pokemon.name} title={pokemon.name}></img>
          </div>
        </div>
        <div className="background-image">
          <img src={PkBall} alt="" />
        </div>
      </div>
    );
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
