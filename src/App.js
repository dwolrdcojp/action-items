import React, { Component } from "react";
import "./App.css";
import Items from "./components/items";
import Header from "./components/header";
import ItemForm from "./components/itemForm";

class App extends Component {
  render() {
    return (
      <main className="Container">
        <Header />
        <ItemForm />
        <Items />
      </main>
    );
  }
}

export default App;

