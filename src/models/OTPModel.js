const mongoose = require("mongoose");

let schemaData = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number },
  },
  { versionKey: false }
);

const OTPModel = mongoose.model("otps", schemaData);
module.exports = OTPModel;
