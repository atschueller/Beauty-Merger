import React from "react";
import "./ResultsList.css";

const ResultsListItem = props => {
  const { name, brand, url, review } = props;

  return (
    <li className="list-group-item">
      <h3>{name}</h3>
      <h4>
        Brand: <span>{brand}</span>
      </h4>
      <h5>
        URL: <span>{url}</span>
      </h5>
      <h5>
        {" "}
        Reviews:
        {review.map(r => (
          <li className="myReviews" key={r}>
            {r}
          </li>
        ))}
      </h5>
    </li>
  );
};
export default ResultsListItem;
