const ErrorHander = require("../utils/errorhander.js");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const {verify} = require('jsonwebtoken');
const User = require("../models/userModel.js");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});