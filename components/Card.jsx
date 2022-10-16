import React from "react";

// import ReactDom from "react-dom";

function Card(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
}
export default Card;
// props are used to create custom-reusable features
