import React from "react";
import "./Search.css";

const Search = props => (
  <div className="searchBox">
    <h2>Search</h2>
    <form>
      <label for="topic">Topic</label>
      <p>
        <input className="searchField" type="text" name="topic" id="topic" />
      </p>
      <label for="startYear">Start Year</label>
      <p>
        <input
          className="searchField"
          type="text"
          name="startYear"
          id="startYear"
        />
      </p>
      <label for="endYear">End Year</label>
      <p>
        <input
          className="searchField"
          type="text"
          name="endYear"
          id="endYear"
        />
      </p>
    </form>
  </div>
);

export default Search;
