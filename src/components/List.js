import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";
import { NavLink } from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.pokedex = props.pokedex;
  }

  componentDidUpdate() {
    this.setState = { list: this.props.list };
  }

  render() {
    const tempList = this?.state?.list;
    if (tempList && tempList.length > 0) {
      return (
        <div className="list">
          {tempList.map((pokemon) => (
            <NavLink
              to={{
                pathname: "/PokemonDetails",
                state: pokemon,
              }}
              key={pokemon.id}
            >
              <PokemonItem pokemon={pokemon} pokedex={this.pokedex} />
            </NavLink>
          ))}
        </div>
      );
    } else {
      return <div>This list is empty!</div>;
    }
  }
}
