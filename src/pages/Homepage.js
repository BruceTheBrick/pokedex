import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";
import Pagination from "../components/Pagination";

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

    this.state = {
      list: "",
    };
  }

  pokemonUpdated(newList) {
    this.setState({ list: newList });
  }

  render() {
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        <List list={this.state.list} pokedex={this.pokedex} />
        <Pagination limit={10} startIndex={0} listUpdated={this.pokemonUpdated} pokedex={this.pokedex}></Pagination>
      </Page>
    );
  }
}
