const mongoose = require("mongoose");

let schemaData = mongoose.Schema(
  {
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    password: { type: String },
    address: { type: String },
    roll: { type: String },
    class: { type: String },
  },
  { versionKey: false }
);

const StudentsModel = mongoose.model("students", schemaData);
module.exports = StudentsModel;
