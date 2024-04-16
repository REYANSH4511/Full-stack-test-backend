const mongoose = require("mongoose");

const browserDetailsSchema = new mongoose.Schema(
  {
    ipAddress: {
      type: String,
      // required: true,
    },
    deviceType: {
      type: String,
      required: true,
    },
    browserName: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BrowserDetails = mongoose.model("BrowserDetails", browserDetailsSchema);

module.exports = BrowserDetails;
