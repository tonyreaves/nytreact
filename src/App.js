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

let myQuery = "";

// NYTimes API
const queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
  "&api-key=26c173d356d24490a332df2068d7f56f&q=";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(queryURL + myQuery)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
}

export default App;
