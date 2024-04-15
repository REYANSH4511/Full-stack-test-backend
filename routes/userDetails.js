const express = require("express");
const router = express.Router();
const {
  savePersonalDetails,
  saveAddressDetails,
} = require("../controllers/userDetails");
router.post("/personal-details", savePersonalDetails);
router.post("/address-details", saveAddressDetails);
module.exports = router;
