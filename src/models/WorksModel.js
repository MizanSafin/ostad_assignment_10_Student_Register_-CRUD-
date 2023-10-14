const mongoose = require("mongoose");

let schemaData = mongoose.Schema(
  {
    title: { type: String },
    classNote: { type: String },
    description: { type: String },
    status: { type: String },
    email: { type: String },
  },
  { versionKey: false }
);

const WorksModel = mongoose.model("works", schemaData);
module.exports = WorksModel;
