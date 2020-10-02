const mongoose = require("mongoose");

const ElectronicSchema = new mongoose.Schema(
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
  { collection: "electronic" }
);

const store = mongoose.model("electronic", ElectronicSchema);
module.exports = store;
