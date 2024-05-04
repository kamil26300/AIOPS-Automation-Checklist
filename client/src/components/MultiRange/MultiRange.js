import MultiRangeSlider from "multi-range-slider-react";
import { formatNumber } from "../../functions";
import { useState } from "react";
import "./MultiRange.css";

const MultiRange = (props) => {
  const [minValue, setMinValue] = useState(props.initialMinValue);
  const [maxValue, setMaxValue] = useState(props.initialMaxValue);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const options = {
    barLeftColor: "#eee",
    barRightColor: "#eee",
    barInnerColor: "rgb(0, 126, 174)",
    thumbLeftColor: "rgb(0, 126, 174)",
    thumbRightColor: "rgb(0, 126, 174)",
    ruler: false,
    label: false,
    maxCaption: formatNumber(maxValue),
    minCaption: formatNumber(minValue),
  };

  return (
    <div>
      {props.label}
      <div className="input">
        <input
          type="number"
          style={{ width: `${String(minValue).length}ch` }}
          name={props.nameMin}
          value={minValue}
        />
        <h3>-</h3>
        <input
          type="number"
          name={props.nameMax}
          value={maxValue}
          style={{ width: `${String(maxValue).length}ch` }}
        />
      </div>
      <MultiRangeSlider
        min={0}
        max={props.max}
        {...options}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
};

export default MultiRange;
