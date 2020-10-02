const mongoose = require("mongoose");

const ClothingSchema = new mongoose.Schema(
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
  { collection: "clothing" }
);

const store = mongoose.model("clothing", ClothingSchema);
module.exports = store;
