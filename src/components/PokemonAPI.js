import React, { Component } from "react";
// import PokeDexAPI from "pokeapi-js-wrapper";
const PokeDexAPI = require("pokeapi-js-wrapper");

export default class PokemonAPI extends Component {
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
    this.pokemon = this.pokedex.getPokemonsList();
    console.log(this);
  }

  render() {
    return <></>;
  }
}
