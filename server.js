import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const db = mongoose.connection;
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/factorsData", async (req, res) => {
  try {
    const factorsData = await db.db.collection("factorsData").findOne({});

    if (factorsData) {
      res.json(factorsData["factorsData"]);
    } else {
      res.status(404).json({ error: "No factorsData found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error reading data from MongoDB" });
  }
});

app.get("/api/factors", async (req, res) => {
  try {
    const factors = await db.db.collection("Factors").findOne({});

    if (factors) {
      res.json(factors["factors"]);
    } else {
      res.status(404).json({ error: "No factors found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error reading data from MongoDB" });
  }
});

function calculatePoints(allFactorsData, benefits, simplicity, feasibility) {
  let benefitPoints = {};
  let simplicityPoints = {};
  let feasibilityPoints = {};

  for (const factor in allFactorsData) {
    benefitPoints[factor] = 0;
    simplicityPoints[factor] = 0;
    feasibilityPoints[factor] = 0;
    for (const index in allFactorsData[factor]) {
      const option = allFactorsData[factor][index];
      if (!Array.isArray(option)) {
        const BPoint = benefits[factor][index][option];
        benefitPoints[factor] += BPoint;

        const SPoint = simplicity[factor][index][option];
        simplicityPoints[factor] += SPoint;

        const FPoint = feasibility[factor][index][option];
        feasibilityPoints[factor] += FPoint;
      }
    }
  }

  return { benefitPoints, simplicityPoints, feasibilityPoints };
}

app.post("/api/calculate", async (req, res) => {
  try {
    const output = await db.collection("output").find({}).toArray();
    let benefits, simplicity, feasibility;

    output.forEach((item) => {
      if (item.benefits) benefits = item.benefits;
      if (item.simplicity) simplicity = item.simplicity;
      if (item.feasibility) feasibility = item.feasibility;
    });
    const allFactorsData = req.body.allFactorsData;
    const calculatedPoints = calculatePoints(
      allFactorsData,
      benefits,
      simplicity,
      feasibility
    );
    res.json(calculatedPoints);
  } catch (error) {
    console.log(error);
    res.json({ message: "Data not recieved." });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
