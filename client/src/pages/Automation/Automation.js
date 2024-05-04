import { useState, useEffect } from "react";
import CircularLoading from "../../components/loading/CircularLoading/CircularLoading";
import { CircularNavBar, BasicSurvey, RadialGraph } from "../../components";
import "./Automation.css";

const Automation = () => {
  const [factorsData, setFactorsData] = useState(null);
  const [factors, setFactors] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visited, setVisited] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [calculatedData, setCalculatedData] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/factorsData")
      .then((response) => response.json())
      .then((data) => {
        setFactorsData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
    fetch("http://localhost:8080/api/factors")
      .then((response) => response.json())
      .then((data) => {
        setFactors(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNext = () => {
    if (factors) {
      const currentIndex = factors.indexOf(selectedItem);
      if (currentIndex < factors.length - 1) {
        const nextValue = factors[currentIndex + 1];
        setSelectedItem(nextValue);
      }
    }
  };

  const handlePrev = () => {
    if (factors) {
      const currentIndex = factors.indexOf(selectedItem);
      if (currentIndex > 0) {
        const nextValue = factors[currentIndex - 1];
        setSelectedItem(nextValue);
      }
    }
  };

  return (
    <>
      <div className="io">
        <div className="automation-container">
          <div
            className="left"
            style={
              !factors
                ? { minHeight: "var(--outA)", minWidth: "var(--outA)" }
                : {}
            }
          >
            {factors ? (
              <CircularNavBar
                selectedItem={selectedItem}
                factors={factors}
                visited={visited}
                itemsPerPage={9}
                onItemSelect={setSelectedItem}
              />
            ) : (
              <CircularLoading />
            )}
          </div>
          <div className="right">
            {selectedItem ? (
              <BasicSurvey
                factor={selectedItem}
                loading={!factorsData}
                factorsData={factorsData || {}}
                onItemVisit={setVisited}
                handleNext={handleNext}
                handlePrev={handlePrev}
                setSubmit={setSubmit}
                submit={submit}
                factors={factors}
                setCalculatedData={setCalculatedData}
              />
            ) : null}
          </div>
        </div>
        <div className="output">
          {calculatedData ? (
            <>
              <button
                onClick={() => {
                  const ioDiv = document.querySelector(".io");
                  if (ioDiv) {
                    ioDiv.scrollTo({
                      left: -ioDiv.scrollWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className="calculate calculate-gradient"
              >
                <img src="left-arrow-full.svg" alt="" />
              </button>
              <RadialGraph data={calculatedData} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Automation;
