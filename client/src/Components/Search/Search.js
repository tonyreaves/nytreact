import React, { Component } from "react";
import "./Search.css";
import searchApi from "../../Utils";

export default class Search extends Component {
  onSubmit = event => {
    event.preventDefault();
    console.log(
      searchApi.searchApi({
        query: "William P. Davis",
        beginYear: "1991",
        endYear: "2018"
      })
    );
  };

  render() {
    return (
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
    );
  }
}
