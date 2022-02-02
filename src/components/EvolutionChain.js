import React, { Component } from "react";
import "./EvolutionChain.css";

export default class EvolutionChain extends Component {
  constructor(props) {
    super(props);

    this.pokemon = props.pokemon;
    this.pokedex = props.pokedex;
    this.parseEvoChain();
  }

  async parseEvoChain() {
    this.evoChain = await this.pokedex.getEvolutionChainById(this.pokemon.id);
    console.log(this.evoChain);
  }
  render() {
    return <div>Testing!</div>;
    // return this.parseEvoChain().map((pokemon) => {
    //   return <div>{pokemon.id}</div>;
    // });
  }
}
