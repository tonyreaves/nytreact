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

// NYTimes API
const queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
  show +
  "&api-key=26c173d356d24490a332df2068d7f56f&q=";

// AJAX GET
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;

  // For loop to grab 10 images
  //     for (var i = 0; i < results.length; i++) {
  // }
});

export default App;
