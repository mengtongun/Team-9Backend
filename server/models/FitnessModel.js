const mongoose = require("mongoose");

const FitnessSchema = new mongoose.Schema(
  {
    store_name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "fitness" }
);

const store = mongoose.model("fitness", FitnessSchema);
module.exports = store;
