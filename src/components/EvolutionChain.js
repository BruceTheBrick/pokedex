import React, { Component } from "react";
import "./EvolutionChain.css";

export default class EvolutionChain extends Component {
  constructor(props) {
    super(props);

    this.pokemon = props.pokemon;
    this.pokedex = props.pokedex;
    this.getEvoChain();
  }

  async getEvoChain() {
    this.species = await this.pokedex.getPokemonSpeciesByName(this.pokemon.species.name);
    this.evoChain = await this.pokedex.getEvolutionChainById(this.getEvolutionChainId(this.species.evolution_chain.url));
    this.initEvolutions();
  }

  initEvolutions() {
    let evo = this.evoChain.chain;
    let pokemon = [];
    pokemon.push(evo.species);
    do {
      let numEvos = evo.evolves_to.length;
      pokemon.push(evo.evolves_to[0].species);
      if (numEvos > 1) {
        for (let i = 1; i < numEvos; i++) {
          pokemon.push(evo.evolves_to[i].speces);
        }
      }
      evo = evo.evolves_to[0];
    } while (evo.evolves_to.length > 0);

    console.log(pokemon);
  }

  getEvolutionChainId(chainURL) {
    return chainURL.substring(chainURL.indexOf("/", chainURL.length - 5) + 1, chainURL.length - 1);
  }

  render() {
    return <div>Testing!</div>;
  }
}
