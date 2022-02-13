import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import PokeDexLogo from "../assets/PokeDex.png";

import List from "../components/List";
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

    this.startIndex = 0;
    this.limit = 10;
    this.totalCount = 0;

    this.updateList = this.updateList.bind(this);

    this.pokemonUpdated = this.pokemonUpdated.bind(this);
    this.updateList(this.startIndex);
  }

  async updateList(startIndex) {
    this.startIndex = startIndex;
    let newList = await this.pokedex.getPokemonsList({ offset: this.startIndex, limit: this.limit });
    this.totalCount = newList.count;
    this.setState({ list: newList.results });
  }

  getCurrentList() {
    return this.state.list;
  }

  pokemonUpdated(newList) {
    this.setState({ list: newList });
  }

  render() {
    if (this?.state?.list && this.state.list.length > 0) {
      return (
        <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
          <List list={this.state.list} pokedex={this.pokedex}></List>
          <div className="list_nav">
            <Pagination getNext={this.updateList} getPrev={this.updateList} navigate={this.updateList} maxRecords={10} totalCount={this.totalCount} />
          </div>
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
