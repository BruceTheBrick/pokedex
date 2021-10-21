import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";

export default class List extends React.Component {
  render() {
    const { list, nav } = this.props;
    return (
      <div className="list">
        {list.map((pokemon) => (
          <PokemonItem key={pokemon.id} navigation={nav} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
