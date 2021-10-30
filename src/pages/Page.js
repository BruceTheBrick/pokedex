import PageTitle from "./PageTitle";

import "./Page.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.heading = props.heading;
  }

  getImage() {
    if (this.props.image) {
      return (
        <div className="page-img wobble">
          <img src={this.props.image} alt={this.props.image_alt} />
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <div className="content">
          {this.getImage()}
          <PageTitle>{this.props.heading}</PageTitle>
          <div className="main">
            <div className="page-body">{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}
