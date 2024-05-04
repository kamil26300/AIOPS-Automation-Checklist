export const factorsData = {
  Repetitive: [
    {
      question:
        "Is the current process repetitive in nature, with similar steps being performed multiple times?",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      question: "Number of times executed in a month?",
      options: ["0 - 1", "2 - 10", "11 - 50", "> 50"],
    },
  ],

  "Rule based": [
    {
      question:
        "Does the current process have a clear set of rules and conditions to execute?",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      question: "Do you have documented rules in the form of SOP / KB ?",
      options: ["Yes", "No"],
    },
  ],

  "Time Consuming": [
    {
      question: "Is the current process time consuming?",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      question: "Is it possible to predict the time range for job execution?",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      type: "number",
      question: "What is the time taken?",
      options: ["Days", "Hours", "Minutes", "Seconds"],
    },
  ],

  "Data driven": [
    {
      question:
        "Is the current process based on data and have a clear set of inputs and outputs?",
      options: ["Yes", "No"],
    },
  ],

  "Human input driven": [
    {
      question: "Is the current process involves human approvals, human input?",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      question: "How many steps requires human involvement",
      options: ["1", "2 - 5", "> 5"],
    },
    
    {
      condition: "Yes",
      conditionId: "0",
      question:
      "What Are the channels are owned/susbcribed by the organization the time taken?",
      options: ["Web application", "Email", "Conversational Interface", "None"],
    },
    
    {
      condition: "Yes",
      conditionId: "0",
      question: "Are the channels are owned/susbcribed by the organization?",
      options: ["Yes", "No"],
    },
    
    {
      condition: "Yes",
      conditionId: "0",
      question: "Are the personas involved is within the organization?",
      options: ["Yes", "No"],
    },
  ],
  
  "Error prone": [
    {
      question:
        "Is the current process prone to errors when performed manually, making automation a way to reduce mistakes?",
      options: ["Yes", "No"],
    },
  ],

  Scalable: [
    {
      question:
        "Does the process should handle large volumes of data or multiple requests simultaneously? ",
      options: ["Yes", "No"],
    },

    {
      condition: "Yes",
      type: "number",
      question: "What is the volume of data? ",
      options: ["Enter volume of data"],
    },
    {
      condition: "Yes",
      conditionId: "0",
      question: "Are there multiple requests? ",
      options: ["Yes", "No"],
    },
  ],

  "Multiple Steps": [
    {
      question: "Does the current process have multiple steps ?",
      options: ["Yes", "No"],
    },
  ],

  "Synchronous or Asynchronous": [
    {
      question:
        "Does the steps has to be executed sequential that is each step execution depends on the previous step completion or it can be done in parallel ?",
      options: ["Yes", "No"],
    },
  ],

  Randomness: [
    {
      question:
        "Does the current task or steps has input data that is not predictable and the process has to execute based on some human judgment that is very tacit?",
      options: ["Yes", "No"],
    },
  ],

  Availability: [
    {
      question:
        "Does the current manual process requires to be executed during off business hours?",
      options: ["Yes", "No"],
    },
  ],

  Validation: [
    {
      question: "Does the outcome of the process requires validation?",
      options: ["Yes", "No"],
    },
    {
      condition: "Yes",
      question: "Does the validation requires human approval?",
      options: ["Yes", "No"],
    },
  ],

  "Interfacing Systems": [
    {
      question: "How many systems does the current process has to interface?",
      options: ["1", "2 - 5", "> 5"],
    },
  ],

  "Interface System type": [
    {
      question:
        "What is the type of system the process involves in order to execute?",
      options: [
        "API",
        "DB(SQL,NoSQL)",
        "File System(CRUD,Transfer)",
        "Custom Scripts",
        "Utilities",
        "Web Application",
        "Desktop Application",
        "Legacy Applications",
        "Emails(Read, Send)",
        "Calls(Send)",
        "None of the above",
      ],
    },
  ],

  Trigger: [
    {
      question: "How does the current process trigger?",
      options: [
        "(On-demand(API, Webhook)",
        "Scheduled",
        "Email Event",
        "Message Event(Queue)",
        "Application Event",
        "ITSM Request",
        "Monitoring Event",
        "File Pooling",
      ],
    },
  ],

  Criticality: [
    {
      question: "How important is this process for business?",
      options: ["Low ", " Medium ", " High", "Critical"],
    },
  ],

  "Mandatory Manual Execution": [
    {
      question:
        "Is the current process run manually due to compliance/regulatory requirements or any other reason (hands-on experience)?",
      options: ["Yes", "No"],
    },
  ],
};
