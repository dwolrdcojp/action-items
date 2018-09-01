import React, { Component } from "react";
import faker from "faker";

class Items extends Component {

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
    } = this.props.items;

    const { length: count } = this.props.items; 

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
            {this.props.items.map(item =>(
            <tr key={item._id}>
              <td>{item.priority}</td>
              <td>{item.description}</td>
              <td>{item.owner}</td>
              <td>{item.creationDate}</td>
              <td>{item.dueDate}</td>
              <td>{item.completionDate}</td>
              <td>{item.status}</td>
              <td>{item.updates}</td>
              <td><button onClick={() => this.props.onDelete(item)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
            ))};
          </tbody>
      </table>
      </React.Fragment>
      );
  }
}

export default Items;
