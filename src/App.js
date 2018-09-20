import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";
import Results from "./Components/Results/Results.js";
import Saved from "./Components/Saved/Saved.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Search />

        <Results />

        <Saved />
      </div>
    );
  }
}

let myQuery = "";
let beginYear = "";
let endYear = "";

// NYTimes API
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL +=
  "?" +
  $.param({
    "api-key": "26c173d356d24490a332df2068d7f56f",
    q: myQuery,
    begin_date: beginYear + "0101",
    end_date: endYear + "1231",
    page: 0
  });

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch(queryURL + myQuery)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            headline: news.headline.main,
            weburl: news.web_url
          });
        },

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
