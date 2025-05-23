const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema(
  {
    label: String,
    price: Number,
    desksAvailable: Number,
    minimumTermTitle: String,
    maximumTermTitle: String,
    minimumTermText: String,
    maximumTermText: String,
    included: {
      type: mongoose.Schema.Types.Mixed,
      optional: true,
    },
    notIncluded: {
      type: mongoose.Schema.Types.Mixed,
      optional: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyOffice", officeSchema);
