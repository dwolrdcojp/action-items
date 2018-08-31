import React, { Component } from "react";
import faker from "faker";

class Items extends Component {
  state = {
    items: [
      { priority: "High",
      description: "Broken Bank",
      owner: "Chris",
      creationDate: "Aug 1st",
      dueDate: "Dec 4th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Making a budget"
    },
      { priority: "Medium",
      description: "Car parts from Japan",
      owner: "Max",
      creationDate: "Aug 3rd",
      dueDate: "Dec 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Making fake data"
    },
      { priority: "Low",
      description: "Gamblin'",
      owner: "Kevin",
      creationDate: "Aug 31st",
      dueDate: "Dec 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Data boys"
    },
      { priority: "High",
      description: "Million $ deals",
      owner: "Chris",
      creationDate: "Aug 31st",
      dueDate: "Jan 5th",
      completionDate: "Incomplete",
      status: "In progress",
      updates: "Microdose" }
    ]
  };


  render() {
    const {
      priority,
      description,
      owner,
      creationDate,
      dueDate,
      completionDate,
      status,
      updates
    } = this.state;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Priority</th>
            <th scope="col">Description</th>
            <th scope="col">Owner</th>
            <th scope="col">Date Created</th>
            <th scope="col">Due Date</th>
            <th scope="col">Completion Date</th>
            <th scope="col">Status</th>
            <th scope="col">Updates</th>
          </tr>
          </thead>
          <tbody>
            {this.state.items.map(item =>(
            <tr>
              <td>{item.priority}</td>
              <td>{item.description}</td>
              <td>{item.owner}</td>
              <td>{item.creationDate}</td>
              <td>{item.dueDate}</td>
              <td>{item.completionDate}</td>
              <td>{item.status}</td>
              <td>{item.updates}</td>
            </tr>
            ))};
          </tbody>
      </table>
      );
  }
}

export default Items;
