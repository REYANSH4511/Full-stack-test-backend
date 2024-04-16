const express = require("express");
const router = express.Router();
const {
  savePersonalDetails,
  saveAddressDetails,
} = require("../controllers/userDetails");
const Validator = require("../validators/userDetails");
router.post(
  "/personal-details",
  Validator("saveValidPersonalDetails"),
  savePersonalDetails
);
router.post(
  "/address-details",
  Validator("saveValidAddressDetails"),
  saveAddressDetails
);
module.exports = router;
