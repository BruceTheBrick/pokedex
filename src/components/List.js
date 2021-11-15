import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";
import { NavLink } from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
    };
    this.list = props.list;
    this.pokedex = props.pokedex;
  }

  componentDidMount() {
    this.render();
  }

  componentDidUpdate(props) {
    this.list = props.list;
    this.render();
  }

  render() {
    const tempList = this.list;
    if (tempList.length > 0) {
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
              <PokemonItem pokemon={pokemon} pokedex={this.pokedex} />
            </NavLink>
          ))}
        </div>
      );
    } else {
      return <div>This list is empty.</div>;
    }
  }
}
