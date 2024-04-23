const express = require("express");

const router = express.Router();

const { deliveryCost } = require("../controllers/pricingController");

router.post("/delivery-price", deliveryCost);

module.exports = router;
