import React, { useState, useEffect } from "react";
import SkeletonLoader from "../loading/SkeletonLoader/SkeletonLoader";
import "./BasicSurvey.css";

const BasicSurvey = (props) => {
  const {
    factor,
    onItemVisit,
    handleNext,
    handlePrev,
    factors,
    factorsData,
    loading,
    setSubmit,
    submit,
    setCalculatedData,
  } = props;

  // Declaring questions and answers of factor
  const factorData = factorsData[factor];

  // Storing answers of all factors
  const [allFactorsData, setAllFactorsData] = useState({
    Repetitive: {
      0: "Yes",
      1: "11 - 50",
    },
    "Rule based": {
      0: "Yes",
      1: "Yes",
    },
    "Time Consuming": {
      0: "Yes",
      1: "Yes",
      2: "Hours",
    },
    "Data driven": {
      0: "Yes",
    },
    "Human input driven": {
      0: "Yes",
      1: "1",
      2: "Web application",
      3: "Yes",
      4: "Yes",
    },
    "Error prone": {
      0: "Yes",
    },
    Scalable: {
      0: "Yes",
    },
    "Multiple Steps": {
      0: "Yes",
    },
    "Synchronous or Asynchronous": {
      0: "Yes",
    },
    Randomness: {
      0: "Yes",
    },
    Availability: {
      0: "Yes",
    },
    Validation: {
      0: "Yes",
      1: "Yes",
    },
    "Interfacing Systems": {
      0: "> 5",
    },
    "Interface System type": {
      0: "DB(SQL,NoSQL)",
    },
    Trigger: {
      0: "Scheduled",
    },
    Criticality: {
      0: "Medium",
    },
    "Mandatory Manual Execution": {
      0: "Yes",
    },
  });
  const [visitedFactors, setVisitedFactors] = useState({});
  const [isPrevDisabled, setPrevDisabled] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(false);
  const factorState = allFactorsData[factor] || {};

  useEffect(() => {
    const updatedFactors = { ...visitedFactors };
    if (
      allFactorsData[factor] &&
      Object.values(allFactorsData[factor]).every((value) => value !== null)
    ) {
      setVisitedFactors(() => {
        updatedFactors[factor] = true;
        return updatedFactors;
      });
    } else {
      setVisitedFactors(() => {
        delete updatedFactors[factor];
        return updatedFactors;
      });
    }
  }, [allFactorsData, factor]);

  useEffect(() => {
    onItemVisit(visitedFactors);
  }, [visitedFactors]);

  useEffect(() => {
    const currentIndex = factors.indexOf(factor);
    const length = factors.length;
    if (currentIndex === 0) {
      setPrevDisabled(true);
      setNextDisabled(false);
    } else if (currentIndex === length - 1) {
      setPrevDisabled(false);
      setNextDisabled(true);
    } else {
      setPrevDisabled(true);
      setTimeout(() => {
        setPrevDisabled(false);
      }, 250);
      setNextDisabled(true);
      setTimeout(() => {
        setNextDisabled(false);
      }, 250);
    }
  }, [factor]);

  // Checking if submit button is valid or not
  useEffect(() => {
    Object.keys(visitedFactors).length === factors.length
      ? setSubmit(true)
      : setSubmit(false);
  }, [visitedFactors]);

  const calculate = (allFactorsData) => {
    fetch("http://localhost:8080/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ allFactorsData }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCalculatedData(data);
        const ioDiv = document.querySelector(".io");
        if (ioDiv) {
          ioDiv.scrollTo({
            left: ioDiv.scrollWidth,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handles change in answers
  const handleOptionChange = (objId, value, optsId, type) => {
    const updatedFactorState = { ...factorState };
    if (optsId !== undefined) {
      if (!Array.isArray(updatedFactorState[objId])) {
        updatedFactorState[objId] = [];
      }

      if (type === "number") {
        updatedFactorState[objId][optsId] = parseInt(value);
      } else {
        updatedFactorState[objId][optsId] = value;
      }
    } else {
      updatedFactorState[objId] = value;
    }

    for (let Id = objId + 1; Id < factorData.length; Id++) {
      if (
        factorData[Id].condition &&
        factorData[Id].condition === value &&
        ((factorData[Id].conditionId &&
          parseInt(factorData[Id].conditionId) === objId) ||
          Id === objId + 1)
      ) {
        updatedFactorState[Id] = null;
      } else if (
        factorData[Id].condition &&
        factorData[Id].condition !== value &&
        ((factorData[Id].conditionId &&
          parseInt(factorData[Id].conditionId) === objId) ||
          (!factorData[Id].conditionId && Id === objId + 1))
      ) {
        delete updatedFactorState[Id];
      }
    }
    setAllFactorsData({ ...allFactorsData, [factor]: updatedFactorState });
  };

  // Whether or not question should be displayed base on conditions
  const showQuestion = (obj, objId) => {
    if (
      !obj.condition ||
      obj.condition === factorState[obj.conditionId || objId - 1]
    ) {
      return (
        <div className="q-container">
          <div className="question">{obj.question}</div>
          {/* Options */}
          <div className={`options ${obj.type}`}>
            {obj.options.map((opts, optsId) => {
              return (
                <div
                  className="option"
                  id={`q${objId}o${optsId}`}
                  key={`q${objId}o${optsId}`}
                >
                  {obj.type === "number" ? (
                    <input
                      type={obj.type}
                      name={`question${objId}`}
                      value={
                        factorState[objId] && factorState[objId][optsId]
                          ? factorState[objId][optsId]
                          : ""
                      }
                      style={{
                        width: `${
                          String(
                            factorState[objId] && factorState[objId][optsId]
                              ? factorState[objId][optsId]
                              : "0"
                          ).length
                        }ch`,
                      }}
                      onChange={(e) => {
                        handleOptionChange(
                          objId,
                          e.target.value,
                          optsId,
                          obj.type
                        );
                      }}
                    />
                  ) : (
                    <input
                      type="radio"
                      name={`question${objId}`}
                      value={opts}
                      checked={factorState[objId] === opts}
                      onChange={() => handleOptionChange(objId, opts)}
                    />
                  )}
                  <span>{opts}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className={`basic-survey`}>
        <div className="head-flex">
          <h3>{factor}</h3>
          <div className="navSurvey">
            <button
              disabled={isPrevDisabled}
              className="btn prev"
              onClick={handlePrev}
            >
              <img src="prev.svg" alt="prev" />
            </button>
            <button
              disabled={isNextDisabled}
              className="btn next"
              onClick={handleNext}
            >
              <img src="next.svg" alt="next" />
            </button>
            {submit ? (
              <button
                onClick={() => calculate(allFactorsData)}
                className="calculate calculate-gradient"
              >
                <img src="right-arrow-full.svg" alt="" />
              </button>
            ) : null}
          </div>
        </div>
        {!loading ? (
          factorData &&
          factorData.map((obj, objId) => {
            return (
              <div key={`q${objId}`} id={`q${objId}`}>
                {showQuestion(obj, objId)}
              </div>
            );
          })
        ) : (
          <SkeletonLoader count={4} />
        )}
      </div>
    </>
  );
};

export default BasicSurvey;
