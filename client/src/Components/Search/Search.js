import React, { Component } from "react";
import "./Search.css";
import searchApi from "../../Utils";
import Results from "../Results/Results.js";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  //onSubmit should store the results in the state, then show results component if results are present
  //searchApi func returns a promise, so to access data will need .then

  onSubmit = event => {
    event.preventDefault();
    searchApi
      .searchApi({
        query: "William P. Davis",
        beginYear: "1991",
        endYear: "2018"
      })
      .then(({ data }) => {
        this.setState({ results: data.response.docs });
      });
  };

  render() {
    return (
      <div>
        <div className="searchBox">
          <h2>Search</h2>
          <form>
            <label htmlFor="topic">Topic</label>
            <p>
              <input
                className="searchField"
                type="text"
                name="topic"
                id="topic"
              />
            </p>
            <label htmlFor="startYear">Start Year</label>
            <p>
              <input
                className="searchField"
                type="text"
                name="startYear"
                id="startYear"
              />
            </p>
            <label htmlFor="endYear">End Year</label>
            <p>
              <input
                className="searchField"
                type="text"
                name="endYear"
                id="endYear"
              />
            </p>
            <button onClick={event => this.onSubmit(event)} id="search">
              Search
            </button>
          </form>
        </div>
        <div>
          <Results items={this.state.results} />
        </div>
      </div>
    );
  }
}
