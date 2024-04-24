const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  organization_id: Number,
  item_id: Number,
  zone: {
    type: String,
    enum: ["central", "south", "north", "east", "west"],
    required: true,
  },
  base_distance_in_km: {
    type: Number,
    default: 5,
  },
  km_price: {
    type: Number,
    default: 1.5,
  },
  fix_price: {
    type: Number,
    default: 10,
  },
});

const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
