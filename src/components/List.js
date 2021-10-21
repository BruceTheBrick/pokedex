import "./List.css";

import PokemonItem from "./PokemonItem";
import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.list.map((pokemon) => (
          <PokemonItem key={pokemon.id} navigation={this.props.navigation} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
