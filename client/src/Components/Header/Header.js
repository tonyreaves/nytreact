import React from "react";
import "./Header.css";

const Header = props => (
  <div className="top">
    <h1>New York Times Article Scrubber</h1>
    <h2>Search for and annotate articles of interest</h2>
    <nav>
      <a href="/">Search </a>
      <a href="/results">Results </a>
      <a href="/saved">Saved</a>
    </nav>
  </div>
);

export default Header;
