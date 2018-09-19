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
  };
}

// NYTimes API
const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  show + "&api_key=GDrp9yYXxOT08SiDuSbymTZKPxz747Yg&limit=10";

// AJAX GET
$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {

    var results = response.data;

    // For loop to grab 10 images
//     for (var i = 0; i < results.length; i++) {
// }
}

export default App;
