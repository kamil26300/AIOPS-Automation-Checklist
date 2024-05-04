const manualTimePerIncident = 24; // hour
const automatedTimePerIncident = 3 / 3600; // sec
const averageHourlyWage = 100; //$
const avgPenaltyCost = 5000; //$
const probOfAvoidingPenalty = 0.7; //%
const avgRevenueLostPerHourOfDowntime = 1000; //$

export const timeSavedPerIncident = () => {
  return manualTimePerIncident - automatedTimePerIncident;
};

export const costSavedPerTeam = (onsiteTeamSize, offshoreTeamSize) => {
  const noOfEmployees = onsiteTeamSize + offshoreTeamSize;
  return averageHourlyWage * noOfEmployees * timeSavedPerIncident();
};

export const riskMitigation = () => {
  return avgPenaltyCost * probOfAvoidingPenalty;
};

export const revenueImpact = () => {
  return avgRevenueLostPerHourOfDowntime * timeSavedPerIncident();
};

export const totalValueGenerated = (
  totalTicketsMin,
  onsiteTeamSizeMin,
  offshoreTeamSizeMin,
) => {
  return (
    totalTicketsMin *
    (revenueImpact() + // Revenue saved from downtime
      costSavedPerTeam(onsiteTeamSizeMin, offshoreTeamSizeMin) +
      riskMitigation())
  );
};

export const calculateAll = (
  totalTicketsMin,
  totalTicketsMax,
  repeatedTicketsMin,
  repeatedTicketsMax,
  onsiteTeamSizeMin,
  onsiteTeamSizeMax,
  offshoreTeamSizeMin,
  offshoreTeamSizeMax,
  avgResolTimeMin,
  avgResolTimeMax,
) => {
  return {
    totalValueGenerated: totalValueGenerated(
      totalTicketsMin,
      onsiteTeamSizeMin,
      offshoreTeamSizeMin,
    ),
  };
};
