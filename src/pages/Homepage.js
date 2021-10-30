import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.list = props.list;
  }
  render() {
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        <List list={this.list} />
      </Page>
    );
  }
}
