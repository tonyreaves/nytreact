import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";
import Results from "./Components/Results/Results.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Search />

        <Results />
      </div>
    );
  }
}

export default App;
