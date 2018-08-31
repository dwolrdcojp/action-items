import React, { Component } from "react";
import Input from "./input";

class ItemForm extends Component {

  state = {
    item: {
      _id: '',
      priority: '',
      description: '',
      owner: '',
      creationDate: '',
      dueDate: '',
      completionDate: '',
      status: '',
      updates: ''}
    };

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const item = { ...this.state.item };
    item[input.name] = input.value;
    this.setState({ item });
  };

  render() {
    const { item } = this.state;
    return <div>
      <h1>Create new action item</h1>
      <form onSubmit={this.handleSubmit}>
        <Input 
          name="priority"
          value={item.priority}
          label="Priority"
          onChange={this.handleChange}
        />
        <Input 
          name="description"
          value={item.description}
          label="Description"
          onChange={this.handleChange}
        />
        <Input 
          name="owner"
          value={item.owner}
          label="Owner"
          onChange={this.handleChange}
        />
        <Input 
          name="creationDate"
          value={item.creationDate}
          label="Creation Date"
          onChange={this.handleChange}
        />
        <Input 
          name="dueDate"
          value={item.dueDate}
          label="Due Date"
          onChange={this.handleChange}
        />
        <Input 
          name="completionDate"
          value={item.completionDate}
          label="Completion Date"
          onChange={this.handleChange}
        />
        <Input 
          name="status"
          value={item.status}
          label="Status"
          onChange={this.handleChange}
        />
        <Input 
          name="updates"
          value={item.updates}
          label="Updates"
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  };
};

export default ItemForm;