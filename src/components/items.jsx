import React, { Component } from "react";
import faker from "faker";

class Items extends Component {
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

    const { length: count } = this.state.items; 

    if (count === 0)
      return <p>There are no action items in the database.</p>;

    return (
      <React.Fragment>
      <p>Showing {count} action items in the database.</p>
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
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
            {this.state.items.map(item =>(
            <tr key={item._id}>
              <td>{item.priority}</td>
              <td>{item.description}</td>
              <td>{item.owner}</td>
              <td>{item.creationDate}</td>
              <td>{item.dueDate}</td>
              <td>{item.completionDate}</td>
              <td>{item.status}</td>
              <td>{item.updates}</td>
              <td><button onClick={() => this.handleDelete(item)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
            ))};
          </tbody>
      </table>
      </React.Fragment>
      );
  }
}

export default Items;
