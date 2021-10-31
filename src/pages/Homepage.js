import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";
// import PokeAPI from "../components/PokemonAPI";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.list = props.list;
    this.isLoading = true;
    this.pokedex = props.pokedex;
    this.pokedex.getPokemonsList().then((res) => {
      this.pokemon = res;
      this.setIsLoading(false);
    });
    this.temp();
  }
  temp() {
    this.int = setInterval(console.log(this.isLoading), 200);
  }

  setIsLoading(val) {
    console.log("Is loading being updated...");
    this.isLoading = val;
  }
  render() {
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        {/* <div>{this.getPokemon()}</div> */}
        {!this.isLoading ? <List list={this.pokemon} /> : <div>Loading, please wait...</div>}
      </Page>
    );
  }
}
