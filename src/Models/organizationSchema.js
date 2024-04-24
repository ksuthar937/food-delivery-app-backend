const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
