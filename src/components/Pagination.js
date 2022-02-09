import React, { Component } from "react";

import "./Pagination.css";
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.maxRecords = props.maxRecords;
    this.totalCount = props.totalCount;
    this.MAX_NAV_BUTTONS = 7;
    this.startIndex = 0;
    this.currentPageNum = 1;
    this.maxPageNum = Math.floor(this.totalCount / 10) * 10;

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.navigate = this.navigate.bind(this);
    this.getCurrentPageNum = this.getCurrentPageNum.bind(this);
  }

  prev() {
    if (this.startIndex - this.maxRecords >= 0) {
      this.startIndex -= this.maxRecords;
      this.props.getPrev(this.startIndex);
      this.getCurrentPageNum();
    }
  }

  next() {
    if (this.startIndex + this.maxRecords <= this.totalCount) {
      this.startIndex += this.maxRecords;
      this.props.getNext(this.startIndex);
      this.getCurrentPageNum();
    }
  }

  navigate(startIndex) {
    this.startIndex = startIndex;
    this.getCurrentPageNum();
    this.props.navigate(this.startIndex);
  }

  getCurrentPageNum() {
    let num = 0;
    if (this.startIndex === 0) num = 1;
    else num = Math.floor(this.startIndex / this.maxRecords) + 1;
    this.currentPageNum = num;
    return num;
  }

  getLargestPageNum(maxRange = Math.floor(this.MAX_NAV_BUTTONS / 2)) {
    if (this.maxPageNum - this.currentPageNum > maxRange) return this.currentPageNum + maxRange;
    else return this.maxPageNum;
  }

  getSmallestPageNum(maxRange = Math.floor(this.MAX_NAV_BUTTONS / 2)) {
    if (this.currentPageNum - maxRange > 1) return this.currentPageNum - maxRange;
    else return 1;
  }

  getButtonsList() {
    let buttons = [];
    for (let i = this.getSmallestPageNum(); i < this.getLargestPageNum() + 1; i++) {
      buttons.push({
        label: i,
        startIndex: (i - 1) * this.maxRecords,
      });
    }
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
                className={"btn " + (this.getCurrentPageNum() === button.label ? "active" : "")}
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
