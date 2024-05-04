import React, { useState } from "react";
import "./Tabs.css";

const Tab = ({ label, active, onClick }) => (
  <div className={`tab ${active ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

const TabContent = ({ activeTab, tabs }) => (
  <div className="tab-content">{tabs[activeTab].tabContent}</div>
);

const Tabs = (props) => {
  const { defaultTab, tabs, title } = props;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="outerContainer">
      <div className="head">
        <img src="qinfinite_logo_full.svg" alt="logo" />
        <h1>{title[activeTab]}</h1>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((obj, id) => {
            return (
              <Tab
                key={id}
                label={obj.tabLabel}
                active={activeTab === id}
                onClick={() => handleTabClick(id)}
              />
            );
          })}
        </div>
      </div>
      <TabContent activeTab={activeTab} tabs={tabs} />
    </div>
  );
};

export default Tabs;
