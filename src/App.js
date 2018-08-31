import React, { Component } from "react";
import "./App.css";
import Items from "./components/items";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Items />
      </div>
    );
  }
}

export default App;

