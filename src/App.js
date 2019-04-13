import React, { Component } from "react";
import "./App.css";
import Column from "./Components/Column/Column";

class App extends Component {
  state = {
    add: false,

    columnData: [
      {
        name: "BACKLOG",
        color: "red",
        columnPosition: 1
      },
      {
        name: "TO DO",
        color: "yellow",
        columnPosition: 2
      },
      {
        name: "IN PROGRESS",
        color: "green",
        columnPosition: 3
      },
      {
        name: "COMPLETED",
        color: "blue",
        columnPosition: 4
      }
    ],

    items: [
      {
        id: 1,
        item: "Who are we kidding? This will never actually get done",
        position: 1
      },
      {
        id: 2,
        item: "You're probably right",
        position: 1
      },
      {
        id: 3,
        item: "Well.... maybe it will",
        position: 2
      },
      {
        id: 4,
        item: "Yeah, it made it to the todo list!",
        position: 2
      },
      {
        id: 5,
        item: "It's all the way to the progress column now!",
        position: 3
      },
      {
        id: 6,
        item: "Who would've thought??",
        position: 3
      },
      {
        id: 7,
        item: "I'm starting to think this will get done!",
        position: 3
      },
      {
        id: 8,
        item: "Time to break out the bubbly! It's done!!",
        position: 4
      }
    ]
  };

  backward = (columnPosition, itemID) => {
    let tempArray = this.state.items;

    tempArray[itemID - 1].position = tempArray[itemID - 1].position - 1;

    this.setState({
      items: tempArray
    });
  };

  forward = (columnPosition, itemID) => {
    let tempArray = this.state.items;

    tempArray[itemID - 1].position = tempArray[itemID - 1].position + 1;

    this.setState({
      items: tempArray
    });
  };

  displayAdd = columnPosition => {
    let newItem = prompt("Add a new card!");

    let duplicate = false;

    let tempArray = this.state.items;

    tempArray.forEach((current, index) => {
      if (current.item == newItem) {
        alert("Sorry! Unique cards only!");
        duplicate = true;
      }
    });

    if (duplicate) {
      return;
    } else {
      tempArray.push({
        id: this.state.items.length + 1,
        item: newItem,
        position: columnPosition
      });

      this.setState({
        items: tempArray
      });
    }
  };

  render() {
    let displayColumns = this.state.columnData.map((current, index) => {
      return (
        <div key={current + index}>
          <Column
            name={current.name}
            color={current.color}
            columnPosition={current.columnPosition}
            items={this.state.items}
            backward={this.backward}
            forward={this.forward}
            displayAdd={this.displayAdd}
          />
        </div>
      );
    });

    return <div className="App">{displayColumns}</div>;
  }
}

export default App;
