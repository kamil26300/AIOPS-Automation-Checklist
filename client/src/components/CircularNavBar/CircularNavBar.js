import { useEffect, useState } from "react";
import "./CircularNavBar.css";

const CircularNavBar = (props) => {
  const { factors, itemsPerPage, onItemSelect, visited, selectedItem } = props;
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selectedItem);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(factors.length / itemsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setActive(false);
      setTimeout(() => {
        setActive(true);
      }, 500);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 250);
    }
  };
  const nextDisabled = active && currentPage < totalPages - 1 ? "flex" : "none";

  const prevPage = () => {
    if (currentPage > 0) {
      setActive(false);
      setTimeout(() => {
        setActive(true);
      }, 500);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage - 1);
      }, 250);
    }
  };
  const prevDisabled = active && currentPage > 0 ? "flex" : "none";

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedOptions = factors.slice(startIndex, endIndex);

  const visitedLength = visited ? Object.keys(visited).length : "";

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const currentIndex = factors.indexOf(selectedItem);
    setSelectedValue(selectedItem);
    if (currentIndex >= currentPage * itemsPerPage + itemsPerPage) {
      nextPage();
    } else if (currentIndex < currentPage * itemsPerPage) {
      prevPage();
    }
  }, [selectedItem]);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    onItemSelect(selectedValue);
    setSelectedValue(selectedValue);
  };

  return (
    <>
      <div
        style={{ "--len": displayedOptions.length }}
        className={`menu ${active ? "active" : ""}`}
      >
        <div onClick={toggleActive} className="toggle">
          Factors
          <br />
          {visitedLength === "" || visitedLength === 0
            ? ""
            : `${visitedLength} / ${factors.length}`}
        </div>
        {displayedOptions.map((obj, id) => {
          return (
            <li key={id} style={{ "--i": id }}>
              <input
                type="radio"
                value={obj}
                name="factors"
                checked={selectedValue === obj}
                onChange={(e) => handleRadioChange(e)}
              />
              <label
                htmlFor={obj}
                className={`${visited ? (visited[obj] ? "visited" : "") : ""}`}
              >
                {obj}
              </label>
            </li>
          );
        })}
        <div className="nav">
          <button
            style={{ display: prevDisabled }}
            className="btn prev"
            onClick={prevPage}
          >
            <img src="prev.svg" alt="prev" />
          </button>
          <button
            style={{ display: nextDisabled }}
            className="btn next"
            onClick={nextPage}
          >
            <img src="next.svg" alt="next" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CircularNavBar;
