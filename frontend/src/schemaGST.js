const mongoose = require("mongoose");
const data_schema4 = new mongoose.Schema({
 
  selectedStudents: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  inDate: {
    type: String,
    required: true,
  },
  inTime: {
    type: String,
    required: true,
  },
  outDate: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
 
});
module.exports = mongoose.model("attendance_db", data_schema4);
