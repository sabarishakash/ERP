const mongoose = require("mongoose");
const data_schema1 = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritalstatus: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  paidAmount: {
    type: String,
    required: true,
  },
  remainingAmount: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("stu_db", data_schema1);
