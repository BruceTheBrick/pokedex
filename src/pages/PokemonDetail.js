import React, { Component } from "react";
import Page from "../pages/Page";
import Detail from "../components/Detail";

export default class PokemonDetail extends Component {
  render() {
    return (
      <Page title={"Pokedex | Details"}>
        <Detail pokemon={this.props.location.state} history={this.props.history}></Detail>
      </Page>
    );
  }
}
