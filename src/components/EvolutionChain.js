import React, { Component } from "react";
import Loader from "./SkeletonLoader";
import "./EvolutionChain.css";

export default class EvolutionChain extends Component {
  constructor(props) {
    super(props);

    this.pokemon = props.pokemon;
    this.pokedex = props.pokedex;
    this.getEvoChain();

    this.setFlavourText = this.setFlavourText.bind(this);
  }

  async getEvoChain() {
    this.species = await this.pokedex.getPokemonSpeciesByName(this.pokemon.species.name);
    this.setFlavourText(this.species);
    console.log(this.state.flavourText);
    this.evoChain = await this.pokedex.getEvolutionChainById(this.getEvolutionChainId(this.species.evolution_chain.url));
    this.initEvolutions();
  }

  setFlavourText(species) {
    this.setState({ flavorText: species.flavor_text_entries[0].flavor_text });
  }

  async initEvolutions() {
    let evo = this.evoChain.chain;
    let evolutions = [];
    let pokemonList = [];
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
      pokemonList.push(temp);
    }
    this.setState({ evoChain: pokemonList });
  }

  getEvolutionChainId(chainURL) {
    return chainURL.substring(chainURL.indexOf("/", chainURL.length - 5) + 1, chainURL.length - 1);
  }

  generateEvoItem(pokemon) {
    return (
      <div className="evolution_chain_item">
        <img className="eci_img margin-bottom-base" src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        <div className="eci_name">{pokemon.name}</div>
      </div>
    );
  }

  render() {
    if (this.state?.evoChain) {
      return (
        <div className="evolution_chain padding-base border-radius-soft">
          <div className="margin-bottom-base bold">Evolution Chain</div>
          <div className="evolution_chain_list">
            {this.state.evoChain.map((pokemon, index) => {
              if (index < this.state.evoChain.length - 1) {
                return (
                  <React.Fragment key={pokemon.id}>
                    <div>{this.generateEvoItem(pokemon)}</div>
                    <div className="arrow bolder">&rarr;</div>
                  </React.Fragment>
                );
              }
              return <div key={pokemon.id}>{this.generateEvoItem(pokemon)}</div>;
            })}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}
