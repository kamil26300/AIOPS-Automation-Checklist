
# AIOps Automation Checklist


This project involved the development of an AIOps (Artificial Intelligence for IT Operations) automation checklist designed to help enterprise customers evaluate the potential benefits and feasibility of implementing our AIOps solution.


## API Reference

| Method | Endpoint                  | Description                                                              |
|--------|---------------------------|--------------------------------------------------------------------------|
| GET    | `/api/factorsData`         | Fetches the factors data from the MongoDB database.                       |
| GET    | `/api/factors`             | Fetches the factors from the MongoDB database.                            |
| POST   | `/api/calculate`           | Calculates and returns points based on the provided factors data.         |

## Detailed Description of Endpoints

#### GET `/api/factorsData`
- **Description**: Retrieves the factors data stored in the MongoDB collection `factorsData`.
- **Response**: 
  - `200 OK`: Returns the factors data as JSON.
  - `404 Not Found`: No `factorsData` found in the database.
  - `500 Internal Server Error`: Error occurred while fetching data from MongoDB.

#### GET `/api/factors`
- **Description**: Retrieves the factors stored in the MongoDB collection `Factors`.
- **Response**: 
  - `200 OK`: Returns the factors as JSON.
  - `404 Not Found`: No `factors` found in the database.
  - `500 Internal Server Error`: Error occurred while fetching data from MongoDB.

#### POST `/api/calculate`
- **Description**: Accepts `allFactorsData` in the request body, processes it with stored `benefits`, `simplicity`, and `feasibility` data, and returns calculated points.
- **Request Body**: 
  - `allFactorsData`: JSON object containing the factors data to be processed.
- **Response**: 
  - `200 OK`: Returns the calculated points as JSON.
  - `500 Internal Server Error`: Error occurred while processing data.

## Features

The `Automation` component provides a dynamic and interactive user interface for selecting, analyzing, and visualizing data based on various factors. Below are the key features:

| Feature                                  | Description                                                                                  |
|------------------------------------------|----------------------------------------------------------------------------------------------|
| **Data Fetching**                        | Fetches factors and factors data from the API endpoints (`/api/factorsData` and `/api/factors`) on component mount. |
| **Circular Navigation Bar**              | Displays a circular navigation bar for users to select and navigate through different factors. |
| **Basic Survey**                         | Presents a survey related to the selected factor, allowing users to input and review data.     |
| **Next/Previous Navigation**             | Provides the ability to move between different factors using "Next" and "Previous" buttons.   |
| **Visited Tracking**                     | Keeps track of the factors that have been visited by the user.                               |
| **Submit Functionality**                 | Allows users to submit their responses and calculations.                                     |
| **Radial Graph Visualization**           | Displays calculated data in a radial graph format after submission, offering a visual representation of the results. |
| **Smooth Scrolling**                     | Includes a smooth scrolling feature to navigate between input and output sections.           |
| **Loading State Handling**               | Displays a loading spinner while data is being fetched and processed.                        |

## Installation

Clone the repository:
```bash
git clone https://github.com/AIOPS-Automation-Checklist
```

Install client dependencies:
```bash
// requirements.txt
@nivo/radial-bar
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
multi-range-slider-react
react
react-scripts
web-vitals
```
```bash
cd client
npm install -r requirements.txt   
```

Install server dependencies:
```bash
// requirements.txt
body-parser
cors
dotenv
express
mongoose
nodemon
```
```bash
cd server
npm install -r requirements.txt   
```
## Deployment

Run client side:
```bash
  cd client
  npm start
```

Run the server:
```bash
  cd server
  npm run dev
```

## Tech Stack

**Client:** ReactJS, HTML, CSS

**Server:** NodeJS, ExpressJS

**Database:** MongoDB
## Author

- [@kamil26300](https://www.github.com/kamil26300)
