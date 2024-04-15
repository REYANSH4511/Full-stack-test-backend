const BrowserDetails = require("../models/browserDetails");
const { successHandler } = require("../utils/responseHandler");

async function saveBrowserDetails(req, res) {
  const { userAgent, deviceType, browserName, ipAddress } = req.body;

  const result = await BrowserDetails.create({
    userAgent,
    deviceType,
    browserName,
    ipAddress,
  });
  return successHandler({
    res,
    data: result,
    statusCode: 200,
    message: "Browser details saved successfully!",
  });
}

module.exports = {
  saveBrowserDetails,
};
