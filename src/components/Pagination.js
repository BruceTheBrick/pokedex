import React, { Component } from "react";

import "./Pagination.css";
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.maxRecords = props.maxRecords;
    this.totalCount = props.totalCount;
    this.MAX_NAV_BUTTONS = 5;
    this.startIndex = 0;

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.first = this.first.bind(this);
    this.last = this.last.bind(this);
    this.navigate = this.navigate.bind(this);

    this.smallestPageNum = this.smallestPageNum.bind(this);
    this.largestPageNum = this.largestPageNum.bind(this);
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
    } else {
      alert("You shall not pass");
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

  getButtonsList() {
    let buttons = [];

    buttons.push({
      label: 1,
      startIndex: 0,
    });

    buttons.push({
      label: Math.floor(this.totalCount / 10) * 10,
      startIndex: Math.floor(this.totalCount / 10) * 10,
    });

    return buttons;
  }

  smallestPageNum(startIndex) {
    startIndex = Math.floor(startIndex / 10);
    let num = Math.max(1, startIndex - (this.MAX_NAV_BUTTONS - 1) / 2);
    console.log("Small: " + num);
    return num;
  }

  largestPageNum(startIndex) {
    startIndex = Math.floor(startIndex / 10);
    let num = Math.min(Math.floor(this.totalCount / 10) * 10, startIndex + (this.MAX_NAV_BUTTONS - 1) / 2);
    console.log("Large: " + num);
    return num;
  }

  render() {
    return (
      <>
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
      </>
    );
  }
  // render() {
  //   return (
  //     <>
  //       <button onClick={this.first} className="btn">
  //         &larr; &larr;
  //       </button>
  //       <button onClick={this.prev} className="btn">
  //         &larr;
  //       </button>
  //       <div className="pagination_nav_buttons">
  //         {this.getButtonsList().map((button) => {
  //           return (
  //             <button
  //               className="btn"
  //               onClick={() => {
  //                 this.navigate(button.startIndex);
  //               }}
  //               key={button.label}
  //             >
  //               {button.label}
  //             </button>
  //           );
  //         })}
  //       </div>
  //       <button onClick={this.next} className="btn">
  //         &rarr;
  //       </button>
  //       <button onClick={this.last} className="btn">
  //         &rarr; &rarr;
  //       </button>
  //     </>
  //   );
  // }
}
