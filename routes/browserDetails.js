const express = require("express");
const router = express.Router();
const { saveBrowserDetails } = require("../controllers/browserDetails");
const Validator = require("../validators/browserDetails");
router.post("/", Validator("saveValidBrowserDetails"), saveBrowserDetails);

module.exports = router;
