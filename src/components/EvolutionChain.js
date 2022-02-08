import React, { Component } from "react";
import Loader from "./SkeletonLoader";
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

  async initEvolutions() {
    let evo = this.evoChain.chain;
    let evolutions = [];
    let pokemon = [];

    evolutions.push(evo.species);

    do {
      let numEvos = evo.evolves_to.length;
      if (numEvos > 0) {
        for (let i = 0; i < numEvos; i++) {
          evolutions.push(evo.evolves_to[i].species);
        }
      }
      evo = evo.evolves_to[0];
    } while (evo.evolves_to.length > 0);

    for (let i = 0; i < evolutions.length; i++) {
      let temp = await this.pokedex.getPokemonByName(evolutions[i].name);
      pokemon.push(temp);
    }
    this.setState({ evoChain: pokemon });
  }

  getEvolutionChainId(chainURL) {
    return chainURL.substring(chainURL.indexOf("/", chainURL.length - 5) + 1, chainURL.length - 1);
  }

  render() {
    if (this.state?.evoChain) {
      return (
        <div className="card evolution_chain">
          <div className="evolution_chain_list">
            {this.state.evoChain.map((pokemon) => {
              return (
                <div className="evolution_chain_item" key={pokemon.id}>
                  <img src={pokemon.sprites.front_default}></img>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}
