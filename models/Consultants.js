const mongoose = require("mongoose");

const ConsultantsSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  employeeNumber: {
    type: String,
  },
  displayName: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  email: {
    type: String,
  },
  isPermanent: {
    type: Boolean,
  },
  gender: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  phoneType: {
    type: String,
  },
  businessUnit: {
    type: String,
  },
  skillSet: {
    type: String,
  },
  lastUtilDate: {
    type: Date,
  },
  comments: {
    type: String,
  },
  resumeLink: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Consultants", ConsultantsSchema);
