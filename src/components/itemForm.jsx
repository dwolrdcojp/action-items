import React, { Component } from "react";
import Input from "./input";

class ItemForm extends Component {


  render() {
    const { item } = this.props;
    return <div>
      <h1>Create new action item</h1>
      <form onSubmit={(e) => this.props.onSubmit(e)}>
        <Input 
          name="priority"
          value={item.priority}
          label="Priority"
          onChange={this.props.onChange}
        />
        <Input 
          name="description"
          value={item.description}
          label="Description"
          onChange={this.props.onChange}
        />
        <Input 
          name="owner"
          value={item.owner}
          label="Owner"
          onChange={this.props.onChange}
        />
        <Input 
          name="creationDate"
          value={item.creationDate}
          label="Creation Date"
          onChange={this.props.onChange}
        />
        <Input 
          name="dueDate"
          value={item.dueDate}
          label="Due Date"
          onChange={this.props.onChange}
        />
        <Input 
          name="completionDate"
          value={item.completionDate}
          label="Completion Date"
          onChange={this.props.onChange}
        />
        <Input 
          name="status"
          value={item.status}
          label="Status"
          onChange={this.props.onChange}
        />
        <Input 
          name="updates"
          value={item.updates}
          label="Updates"
          onChange={this.props.onChange}
        />
        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  };
};

export default ItemForm;