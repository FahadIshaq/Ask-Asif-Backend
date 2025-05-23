const mongoose = require("mongoose");

const factSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter The Title"],
    },
    description: {
      type: String,
      required: [true, "Please Enter The Description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyFacts", factSchema);
