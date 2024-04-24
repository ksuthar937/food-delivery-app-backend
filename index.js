const express = require("express");
const dotenv = require("dotenv");

const dbConnection = require("./db/dbConfig");
const pricingRoute = require("./src/routes/pricingRoute");
const itemRoute = require("./src/routes/itemRoute");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use("/api/v1", pricingRoute);

app.use("/api/v1", itemRoute);

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
