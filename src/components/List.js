import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";
import { NavLink } from "react-router-dom";
export default class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="list">
        {list.map((pokemon) => (
          <NavLink
            to={{
              pathname: "/PokemonDetails",
              state: pokemon,
            }}
            key={pokemon.id}
          >
            <PokemonItem pokemon={pokemon} />
          </NavLink>
        ))}
      </div>
    );
  }
}
