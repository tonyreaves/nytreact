import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }

  $.getJSON("/articles", function(data) {
    $("#articles").empty();
    // For each one
    for (let i = 0; i < data.length; i++) {
      // Display the info on the page
      $("#articles").append(
        "<div id='articleDiv'><div id='topDiv'><h1 id='headline' data-id='" +
        data[i]._id +
        "'>" +
        "<a href='" +
        data[i].link +
        "'>" +
        data[i].title +
        " " +
        "</h1></a></div><p><br /><div class='details'>" +
        data[i].details +
        "</p></div><button class='addBtn' data-id='" +
        data[i]._id +
        "'><i class='far fa-bookmark'></i>&nbsp Save</button><button id='noteBtn'><i class='far fa-comment-alt'></i>&nbsp Comment</button></div>"
      );
    }
  });
}



export default App;
