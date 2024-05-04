export const inputAttributes = [
  {
    nameMin: "totalTicketsMin",
    nameMax: "totalTicketsMax",
    label: "Total Tickets per year",
    max: 500000,
  },
  {
    nameMin: "repeatedTicketsMin",
    nameMax: "repeatedTicketsMax",
    label: "Approximate Percentage of Frequently Repeated Tickets (AFRT) %",
    max: 100,
  },
  {
    nameMin: "onsiteTeamSizeMin",
    nameMax: "onsiteTeamSizeMax",
    label: "Onsite Team Size",
    max: 200,
  },
  {
    nameMin: "offshoreTeamSizeMin",
    nameMax: "offshoreTeamSizeMax",
    label: "Offshore Team Size",
    max: 300,
  },
  {
    nameMin: "MTTRMin",
    nameMax: "MTTRMax",
    label: "Mean Time To Resolve (hours)",
    max: 100,
  },
];

export const initialInputValues = {
  totalTicketsMax: 500000,
  totalTicketsMin: 100000,

  repeatedTicketsMax: 60,
  repeatedTicketsMin: 40,

  onsiteTeamSizeMax: 100,
  onsiteTeamSizeMin: 50,

  offshoreTeamSizeMax: 200,
  offshoreTeamSizeMin: 100,

  MTTRMax: 80,
  MTTRMin: 30,
};
