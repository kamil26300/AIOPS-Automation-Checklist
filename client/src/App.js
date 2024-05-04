import { ROI, Automation } from "./pages";
import { Tabs } from "./components/index.js"

const App = () => {
  const tabs = [
    {tabLabel: "ROI", tabContent: <ROI/>},
    {tabLabel: "Automation", tabContent: <Automation/>},
  ]

  const title = [
    "AIOps Annual ROI Engine",
    "Automation Check-List",
  ]
  return (
    <div>
      <Tabs tabs={tabs} title={title} defaultTab={1}/>
    </div>
  );
};

export default App;
