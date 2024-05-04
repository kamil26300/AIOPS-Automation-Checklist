import React, { useState } from "react";
import { SimpleDisplay, MultiRange } from "../../components";
import { calculateAll } from "../../data/ROI/FetchOutput";
import { inputAttributes, initialInputValues } from "../../data/ROI/InputData";
import "./ROI.css";

const Home = () => {
  const [output, setOutput] = useState({
    totalValueGenerated: "--",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputObj = {};

    for (let [key, value] of formData.entries()) {
      inputObj[key] = parseInt(value);
    }

    const { totalValueGenerated } =
      calculateAll(...Object.values(inputObj));

    setOutput({
      totalValueGenerated,
    });
  };

  const resetFields = () => {
    setOutput({
      totalValueGenerated: "--",
    });
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        {/* Numeric Inputs with submit and reset buttons */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">
            <h3>Smart ROI Metrics</h3>
          </div>
          <div className="fields">
            {inputAttributes.map((obj, id) => {
              return (
                <MultiRange
                  initialMinValue={initialInputValues[`${obj.nameMin}`]}
                  initialMaxValue={initialInputValues[`${obj.nameMax}`]}
                  {...obj}
                  key={id}
                />
              );
            })}
            <div className="buttonContainer">
              <button className="submitBtn" type="submit">
                Calculate
              </button>
              <button className="resetBtn" type="reset" onClick={resetFields}>
                Reset
              </button>
            </div>
          </div>
        </form>
        {/* Output */}
        <div className="output">
          <SimpleDisplay
            duration={"first year"}
            heading={"Total Value Generated"}
            suffix={"$"}
            value={output.totalValueGenerated}
          />
          <div className="output-meters">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
