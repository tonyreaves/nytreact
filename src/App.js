import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";
import Results from "./Components/Results/Results.js";
import Saved from "./Components/Saved/Saved.js";
import searchApi from "./Utils/API.js";

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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  // componentDidMount() {
  //   fetch(BASEURL + myQuery)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           isLoaded: true,
  //           headline: news.headline.main,
  //           weburl: news.web_url
  //         });
  //       },

  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }
}

export default App;
