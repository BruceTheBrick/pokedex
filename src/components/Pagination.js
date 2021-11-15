import React, { Component } from "react";

import "./Pagination.css";
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.pokedex = props.pokedex;
    this.startIndex = props.startIndex;
    this.limit = props.limit;
    this.pokemonUpdated = props.listUpdated;

    this.getNext = this.getNext.bind(this);
    this.getFirstList();
  }

  async getFirstList() {
    let newList;
    this.startIndex = 0;
    newList = await this.pokedex.getPokemonsList({ offset: 0, limit: this.limit });
    this.pokemonUpdated(newList.results);
  }

  async getNext() {
    let newList;
    this.startIndex += this.limit;
    newList = await this.pokedex.getPokemonsList({ offset: this.startIndex, limit: this.limit });
    this.pokemonUpdated(newList.results);
  }

  render() {
    return (
      <div className="pagination-parent">
        <div className="prev">&larr;</div>
        <div className="next" onClick={this.getNext}>
          &rarr;
        </div>
      </div>
    );
  }
}
