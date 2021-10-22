import PageTitle from "./PageTitle";

import "./Page.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.heading = props.heading;
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <div className="content">
          <div className="main">
            <PageTitle>{this.props.heading}</PageTitle>
            <div className="page-body">{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}
