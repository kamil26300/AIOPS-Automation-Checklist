import { ResponsiveRadialBar } from "@nivo/radial-bar";
import "./RadialGraph.css";

const RadialGraph = ({ data }) => {
  const Benefits = data.benefitPoints;
  const benefitsData = [];
  for (const key in Benefits) {
    if (Benefits.hasOwnProperty(key)) {
      benefitsData.push({ x: key, y: Benefits[key] });
    }
  }

  const Feasibility = data.feasibilityPoints;
  const feasibilityData = [];
  for (const key in Feasibility) {
    if (Feasibility.hasOwnProperty(key)) {
      feasibilityData.push({ x: key, y: Feasibility[key] });
    }
  }

  const Simplicity = data.simplicityPoints;
  const simplicityData = [];
  for (const key in Simplicity) {
    if (Simplicity.hasOwnProperty(key)) {
      simplicityData.push({ x: key, y: Simplicity[key] });
    }
  }

  const graphData = [
    {
      id: "Feasibility",
      data: feasibilityData,
    },
    {
      id: "Simplicity",
      data: simplicityData,
    },
    {
      id: "Benefits",
      data: benefitsData,
    },
  ];

  return (
    <ResponsiveRadialBar
      data={graphData}
      valueFormat=">-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={() => null}
    />
  );
};

export default RadialGraph;