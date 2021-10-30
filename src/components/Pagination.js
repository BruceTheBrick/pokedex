import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.totalCount = props.totalCount;
    this.startIndex = props.startIndex;
    this.maxRecords = props.maxRecords;
    // this.callAPI = this.callAPI.bind(this);
  }

  async getPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data);
    return data;
  }
  render() {
    this.getPokemon();
    return <div>Hello</div>;
  }
}
