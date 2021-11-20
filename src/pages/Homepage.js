import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import PokeDexLogo from "../assets/PokeDex.png";

import PokemonItem from "../components/PokemonItem";
import { NavLink } from "react-router-dom";

const PokeDexAPI = require("pokeapi-js-wrapper");

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    let options = {
      protocol: "https",
      versionPath: "/api/v2/",
      cache: true,
      timeout: 5 * 1000,
      cacheImages: true,
      limit: 10,
    };
    this.pokedex = new PokeDexAPI.Pokedex(options);
    this.pokemonUpdated = this.pokemonUpdated.bind(this);

    this.startIndex = 0;
    this.limit = 10;
    this.totalCount = 0;

    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
  }

  async getNext() {
    let newList = await this.pokedex.getPokemonsList({ offset: this.startIndex, limit: this.limit });
    this.startIndex += this.limit;
    this.setState({ list: newList.results });
  }

  async getPrev() {
    if (this.startIndex > 0) {
      this.startIndex -= this.limit;
      let newList = await this.pokedex.getPokemonsList({ offset: this.startIndex, limit: this.limit });
      this.setState({ list: newList.results });
    }
  }

  getCurrentList() {
    return this.state.list;
  }

  pokemonUpdated(newList) {
    this.setState({ list: newList });
  }

  render() {
    if (this?.state?.list && this.state.list.length > 0) {
      console.log(this.state.list);
      return (
        <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
          <button onClick={this.getPrev}>Get Prev</button>
          <button onClick={this.getNext}>Get Next</button>
          {this.state.list.map((pokemon) => {
            return (
              <NavLink
                to={{
                  pathname: "/PokemonDetails",
                  state: pokemon,
                }}
                key={pokemon.name}
              >
                <PokemonItem pokemon={pokemon} pokedex={this.pokedex} />
              </NavLink>
            );
          })}
        </Page>
      );
    } else {
      return (
        <>
          <button onClick={this.getNext}>Get Next</button>
          <div>Empty</div>
        </>
      );
    }
  }
}
