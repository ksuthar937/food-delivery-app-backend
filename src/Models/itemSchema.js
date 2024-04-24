const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["perishable", "non-perishable"],
    required: true,
  },
  description: {
    type: String,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
