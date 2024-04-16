const UserDetails = require("../models/userDetails");
const { errorHandler, successHandler } = require("../utils/responseHandler");

async function savePersonalDetails(req, res) {
  const { firstName, lastName, email, phoneNumber, day, month, year } =
    req.body;
  const checkDuplicate = await UserDetails.findOne({
    $or: [{ email: email }, { phoneNumber: phoneNumber }],
  });
  if (checkDuplicate) {
    return errorHandler({
      res,
      statusCode: 400,
      message: "Email or Phone number already exists!",
    });
  }
  const result = await UserDetails.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    day,
    month,
    year,
  });
  return successHandler({
    res,
    data: result,
    statusCode: 200,
    message: "Personal details saved successfully!",
  });
}
async function saveAddressDetails(req, res) {
  const { address, userDetailsId } = req.body;
  const result = await UserDetails.findOneAndUpdate(
    { _id: userDetailsId },
    { $set: { address: address } },
    { new: true }
  );
  if (!result) {
    return errorHandler({
      res,
      statusCode: 400,
      message: "User not found!",
    });
  }
  return successHandler({
    res,
    data: result,
    statusCode: 200,
    message: "Address details saved successfully!",
  });
}

module.exports = {
  savePersonalDetails,
  saveAddressDetails,
};
