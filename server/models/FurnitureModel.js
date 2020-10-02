const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema(
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
  { collection: "furniture" }
);

const store = mongoose.model("furniture", FurnitureSchema);
module.exports = store;
