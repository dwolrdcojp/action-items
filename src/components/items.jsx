import React, { Component } from "react";

class Items extends Component {
  state = {
    priority: "High",
    description: "Broken Bank",
    owner: "Chris",
    creationDate: "Aug 31st",
    dueDate: "Dec 5th",
    completionDate: "Incomplete",
    status: "In progress",
    updates: "Making a budget"
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
          <tr className="table-danger">
            <td>{priority}</td>
            <td>{description}</td>
            <td>{owner}</td>
            <td>{creationDate}</td>
            <td>{dueDate}</td>
            <td>{completionDate}</td>
            <td>{status}</td>
            <td>{updates}</td>
          </tr>
          <tr className="">
            <td>{priority}</td>
            <td>{description}</td>
            <td>{owner}</td>
            <td>{creationDate}</td>
            <td>{dueDate}</td>
            <td>{completionDate}</td>
            <td>{status}</td>
            <td>{updates}</td>
          </tr>
          <tr className="">
            <td>{priority}</td>
            <td>{description}</td>
            <td>{owner}</td>
            <td>{creationDate}</td>
            <td>{dueDate}</td>
            <td>{completionDate}</td>
            <td>{status}</td>
            <td>{updates}</td>
          </tr>
          <tr className="">
            <td>{priority}</td>
            <td>{description}</td>
            <td>{owner}</td>
            <td>{creationDate}</td>
            <td>{dueDate}</td>
            <td>{completionDate}</td>
            <td>{status}</td>
            <td>{updates}</td>
          </tr>
          <tr className="">
            <td>{priority}</td>
            <td>{description}</td>
            <td>{owner}</td>
            <td>{creationDate}</td>
            <td>{dueDate}</td>
            <td>{completionDate}</td>
            <td>{status}</td>
            <td>{updates}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Items;
