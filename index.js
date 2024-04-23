const express = require("express");
const dotenv = require("dotenv");

const dbConnection = require("./db/dbConfig");
const pricingRoute = require("./src/routes/pricingRoute");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey");
});

app.use("/api/v1", pricingRoute);

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
