const moongose = require("mongoose");

const userDetailsSchema = moongose.Schema(
  {
    browserId: {
      type: moongose.Types.ObjectId,
      ref: "browserDetails",
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    address: [
      {
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        address3: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserDetails = moongose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
