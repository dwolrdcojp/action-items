import React, { Component } from "react";
import "./App.css";
import Items from "./components/items";
import Header from "./components/header";
import ItemForm from "./components/itemForm";

class App extends Component {
  state = {
    items: [
      { _id: 1,
      priority: "High",
      description: "Broken Bank",
      owner: "Chris",
      creationDate: "Aug 1st",
      dueDate: "Dec 4th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Making a budget"
    },
      { _id: 2,
      priority: "Medium",
      description: "Car parts from Japan",
      owner: "Max",
      creationDate: "Aug 3rd",
      dueDate: "Dec 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Making fake data"
    },
      { _id: 3,
      priority: "Low",
      description: "Gamblin'",
      owner: "Kevin",
      creationDate: "Aug 31st",
      dueDate: "Dec 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Data boys"
    },
      { _id: 4,
      priority: "High",
      description: "Million $ deals",
      owner: "Chris",
      creationDate: "Aug 31st",
      dueDate: "Jan 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Microdose" }
    ]
  };

  handleDelete = (item) => {
    const items = this.state.items.filter(i => i._id !== item._id);
    this.setState( {items} );
  };


  render() {
    return (
      <main className="Container">
        <Header />
        <ItemForm />
        <Items 
        items={this.state.items}
        onDelete={this.handleDelete}/>
      </main>
    );
  }
}

export default App;

