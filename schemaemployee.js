const mongoose = require("mongoose");
const data_schema7 = new mongoose.Schema({
    employeename: {
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
  mothername: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  dateofjoining: {
    type: String,
    required: true,
  },
  dateofreleiving: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
 
 
});
module.exports = mongoose.model("employee_db", data_schema7);
