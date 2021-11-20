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
  }

  componentDidUpdate(previousProps) {
    console.log(previousProps);
    if (previousProps.list !== this.props.list) {
      // this.setState = { list: this.props.list };
      this.state.list = this.props.list;
    }
  }

  getList() {
    return this.state.list;
  }

  render() {
    console.log("Re-rendering");
    console.log(this.getList());
    if (this?.state?.list && this.state.list.length > 0) {
      return (
        <div className="list">
          {this.getList().map((pokemon) => (
            <NavLink
              to={{
                pathname: "/PokemonDetails",
                state: pokemon,
              }}
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
