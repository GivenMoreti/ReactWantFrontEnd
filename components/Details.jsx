import React from "react";
// import ReactDom from "react-dom";

function Details(props) {
  return (
    <div>
      <p>
        <h2>{props.name}</h2>
        {props.likes}
        {"❤️"} likes
      </p>
      <p>
        {props.followers}
        {"👍"} followers
      </p>
      <p>
        {props.following}
        {"🦵"} following
      </p>
    </div>
  );
}
export default Details;
