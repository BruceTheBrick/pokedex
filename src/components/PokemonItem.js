import "./PokemonItem.css";
import PkBall from "../assets/pkball-icon.png";

import React, { Component } from "react";

export default class PokemonItem extends Component {
  getId(id) {
    let res = "";
    res += id;
    while (res.length < 3) {
      res = "0" + res;
    }
    return res;
  }

  render() {
    const { pokemon, navigation } = this.props;
    return (
      <div
        onClick={() => {
          navigation.navigate("Details", { pokemon });
        }}
        className={"list-item bg_" + pokemon.types[0]}
      >
        <div className="header">
          <div className="name">{pokemon.name}</div>
          <div className="id">#{this.getId(pokemon.id)}</div>
        </div>
        <div className="body">
          <div className="types">
            {pokemon.types.map((type) => {
              return <div className="type">{type}</div>;
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
