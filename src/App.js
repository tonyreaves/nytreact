import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";

class App extends Component {
  render() {
    return <Header />;
    return <Search />;
  }
}

// $.getJSON("/articles", function(data) {
//   $("#articles").empty();
//   // For each one
//   for (let i = 0; i < data.length; i++) {
//     // Display the info on the page
//     $("#articles").append(
//       "<div id='articleDiv'><div id='topDiv'><h1 id='headline' data-id='" +
//         data[i]._id +
//         "'>" +
//         "<a href='" +
//         data[i].link +
//         "'>" +
//         data[i].title +
//         " " +
//         "</h1></a></div><p><br /><div class='details'>" +
//         data[i].details +
//         "</p></div><button class='addBtn' data-id='" +
//         data[i]._id +
//         "'><i class='far fa-bookmark'></i>&nbsp Save</button><button id='noteBtn'><i class='far fa-comment-alt'></i>&nbsp Comment</button></div>"
//     );
//   }
// });

export default App;
