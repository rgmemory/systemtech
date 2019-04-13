import React, { Component } from "react";
import "../../App.css";

export default class Column extends Component {
  render() {
    let columnPosition = this.props.columnPosition;

    let displayItems = this.props.items
      .filter(function(current) {
        return columnPosition == current.position;
      })
      .map((current, index) => {
        return (
          <div key={current + index} className="item">
            <button
              className={`${columnPosition < 2 ? "hidden" : "moveitem"}`}
              onClick={() => {
                this.props.backward(columnPosition, current.id);
              }}
            >
              &lt;
            </button>
            <div className="item-detail">{current.item}</div>
            <button
              className={`${columnPosition > 3 ? "hidden" : "moveitem"}`}
              onClick={() => {
                this.props.forward(columnPosition, current.id);
              }}
            >
              &gt;
            </button>
          </div>
        );
      });

    return (
      <div className={`column ${this.props.color}`}>
        <h1 className="title">{this.props.name}</h1>
        <button
          className="add"
          onClick={() => this.props.displayAdd(columnPosition)}
        >
          {" "}
          + Add an item
        </button>
        <div className="items">{displayItems}</div>
      </div>
    );
  }
}
