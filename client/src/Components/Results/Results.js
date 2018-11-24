import React from "react";
import "./Results.css";

const Results = props => (
  <div>
    <div className="searchBox">
      <h2>Results</h2>
    </div>
    {props.items.length > 0 && (
      <ul>
        <li>
          {props.items.map(result => (
            <div className="searchBox"> {result.headline.main} </div>
          ))}
        </li>
      </ul>
    )}
    {/* // for (let i = 0; i < 5; i++) {
//   Articles = <a href={this.news.headline.main}
// } */}
  </div>
);

export default Results;
