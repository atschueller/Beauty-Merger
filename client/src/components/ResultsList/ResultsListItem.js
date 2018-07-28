import React from "react";

const ResultsListItem = props => {
  const {
   name,
   brand,
   url,
   review
  } = props;

  return <li className="list-group-item">
          <h3>{name}</h3>
          <h4>
            Brand: {brand}
          </h4>
          <p>
            Url: {url}
          </p>
          <p>
            Review: {review}
          </p>
  </li>;
};
export default ResultsListItem;