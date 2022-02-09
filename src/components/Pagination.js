import React, { Component } from "react";

import "./Pagination.css";
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.maxRecords = props.maxRecords;
    this.totalCount = props.totalCount;
    this.MAX_NAV_BUTTONS = 5;
    this.startIndex = 0;
    this.selectedPageButton = 0;

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.first = this.first.bind(this);
    this.last = this.last.bind(this);
    this.navigate = this.navigate.bind(this);
    this.getNextPageNums = this.getNextPageNums.bind(this);
    this.getLastPageNums = this.getLastPageNums.bind(this);
    this.updateCurrentPageNum = this.updateCurrentPageNum.bind(this);
  }

  prev() {
    if (this.startIndex - this.maxRecords >= 0) {
      this.startIndex -= this.maxRecords;
      this.props.getPrev(this.startIndex);
    }
  }

  next() {
    if (this.startIndex + this.maxRecords <= this.totalCount) {
      this.startIndex += this.maxRecords;
      this.props.getNext(this.startIndex);
    }
  }

  first() {
    this.startIndex = 0;
    this.props.navigate(this.startIndex);
  }

  last() {
    this.startIndex = Math.floor(this.totalCount / 10) * 10;
    this.props.navigate(this.startIndex);
  }

  navigate(startIndex) {
    this.startIndex = startIndex;
    this.props.navigate(this.startIndex);
  }

  updateCurrentPageNum() {
    this.currentPageNum = Math.floor(this.startIndex / this.maxRecords);
  }

  getNextPageNums(startIndex, quantity) {
    let pageNums = [];
    while (quantity > 0) {
      pageNums.push(Math.floor(startIndex / this.maxRecords) + quantity + 1);
      quantity--;
    }
    return pageNums;
  }

  getLastPageNums(startIndex, quantity) {
    let pageNums = [];
    while (quantity > 0) {
      pageNums.push(Math.floor(startIndex / this.maxRecords) - quantity);
      quantity--;
    }
    return pageNums;
  }

  getButtonsList() {
    let buttons = [];

    console.log(this.getNextPageNums(this.startIndex, 3));
    console.log(this.getLastPageNums(this.startIndex, 3));
    // buttons.push({
    //   label: 1,
    //   startIndex: 0,
    // });

    let nextNums = this.getNextPageNums(this.startIndex, 3);
    for (let i = 0; i < nextNums.length; i++) {
      buttons.push({
        label: nextNums[i],
        startIndex: nextNums[i] * this.maxRecords - this.maxRecords,
      });
    }

    let lastNums = this.getLastPageNums(this.startIndex, 3);
    for (let i = 0; i < lastNums.length; i++) {
      buttons.push({
        label: lastNums[i],
        startIndex: lastNums[i] * this.maxRecords - this.maxRecords,
      });
    }

    buttons.push({
      label: Math.floor(this.totalCount / 10) * 10,
      startIndex: Math.floor(this.totalCount / 10) * 10,
    });

    buttons.sort(function (a, b) {
      return a.label - b.label;
    });

    buttons = buttons.filter((a) => a.label > 0);

    return buttons;
  }

  render() {
    return (
      <div className="pagination-parent">
        <button onClick={this.prev} className="btn">
          &larr;
        </button>
        <div className="pagination_nav_buttons">
          {this.getButtonsList().map((button) => {
            return (
              <button
                className="btn"
                onClick={() => {
                  this.navigate(button.startIndex);
                }}
                key={button.label}
              >
                {button.label}
              </button>
            );
          })}
        </div>
        <button onClick={this.next} className="btn">
          &rarr;
        </button>
      </div>
    );
  }
}
