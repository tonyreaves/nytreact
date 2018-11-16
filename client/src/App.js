import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";
import Results from "./Components/Results/Results.js";
import Saved from "./Components/Saved/Saved.js";
// import searchApi from "./Utils/API.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />

//         <Search />

//         <Results />

//         <Saved />
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       news: []
//     };
//   }
// }

export default App;
