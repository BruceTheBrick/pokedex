import React, { Component } from "react";
import Page from "./Page";
import List from "../components/List";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.list = props.list;
  }
  render() {
    return (
      <Page title="Pokedex">
        <List list={this.list} />
      </Page>
    );
  }
}
