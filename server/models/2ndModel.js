const mongoose = require("mongoose");

const _2ndSchema = new mongoose.Schema(
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
  { collection: "2ndproduct" }
);

const store = mongoose.model("2ndproduct", _2ndSchema);
module.exports = store;
