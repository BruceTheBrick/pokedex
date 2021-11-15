import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";
import { NavLink } from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
  }
  render() {
    console.log(this.list);
    if (this?.list?.length > 0) {
      return (
        <div className="list">
          {this.list.map((pokemon) => (
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
    } else {
      return <div>This list is empty.</div>;
    }
  }
}
