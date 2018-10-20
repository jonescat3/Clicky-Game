import React from "react";
import "./FlintstoneCard.css";

const FlintstoneCard = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    <div className="content">
      <ul>
        <li>
          <strong>Flintstone Game:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default FlintstoneCard;
