import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";
import PokeAPI from "../components/PokemonAPI";
// import Pagination from "../components/Pagination";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.list = props.list;
  }
  render() {
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        <PokeAPI></PokeAPI>
        <List list={this.list} />
      </Page>
    );
  }
}
