import React from "react";
import { formatNumber } from "../../functions";
import "./SimpleDisplay.css";

const SimpleDisplay = (props) => {
  let { heading, suffix, value, duration } = props;
  return (
    <div className="simple-display">
      <div className="heading">
        <h1>{heading}</h1>
        <h5>{duration}</h5>
      </div>
      <div>
        <span className="suffix">{suffix}</span>
        <span className="value">{formatNumber(value)}</span>
      </div>
    </div>
  );
};

export default SimpleDisplay;
