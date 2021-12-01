import "./List.css";

import PokemonItem from "./PokemonItem";
import React from "react";
import { NavLink } from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.pokedex = props.pokedex;
    this.state = { list: props.list };

    this.getList = this.getList.bind(this);
    this.getPokedex = this.getPokedex.bind(this);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.list !== this.props.list || previousProps.list == null) {
      this.setState({ list: this.props.list });
    }
  }

  getList() {
    return this.state.list;
  }

  getPokedex() {
    return this.pokedex;
  }

  render() {
    if (this?.state?.list && this.state.list.length > 0) {
      return (
        <div className="list">
          {this.getList().map((pokemon) => (
            <NavLink
              to={{
                pathname: "/PokemonDetails",
                state: {
                  pokemon: pokemon,
                  pokedex: JSON.stringify(this.getPokedex()),
                },
              }}
              pokedex={this.pokedex}
              key={pokemon.name}
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
