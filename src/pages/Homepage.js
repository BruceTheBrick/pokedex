import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";
import Pagination from "../components/Pagination";

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
  }

  componentDidUpdate() {
    console.log("Homepage updating");
    console.log(this.state);
  }

  async getNext() {
    let newList = await this.pokedex.getPokemonsList({ offset: this.startIndex, limit: this.limit });
    this.startIndex += this.limit;
    this.setState({ list: newList.results });
  }

  pokemonUpdated(newList) {
    this.setState({ list: newList });
  }

  render() {
    console.log(this?.state?.list);
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        <button onClick={this.getNext}>Get Next</button>
        {this?.state?.list.map((pokemon) => {
          console.log(pokemon);
          <NavLink
            to={{
              pathname: "/PokemonDetails",
              state: pokemon,
            }}
            key={pokemon.id}
          >
            <PokemonItem pokemon={pokemon} pokedex={this.pokedex} />
          </NavLink>;
        })}
        {/* <List list={this?.state?.list} pokedex={this.pokedex} /> */}
        {/* <Pagination limit={10} startIndex={0} listUpdated={this.pokemonUpdated} pokedex={this.pokedex}></Pagination> */}
      </Page>
    );
  }
}
