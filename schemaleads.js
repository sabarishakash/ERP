const mongoose = require("mongoose");
const data_schema3 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  alternateMobileNo: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  passedOutYear: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  callLaterTime: {
    type: String,
    required: true,
  },
  callHistory: {
    type: String,
    required: true,
  },
  extraDate: {
    type: String,
    required: true,
  },
  extraTime: {
    type: String,
    required: true,
  },
  spoked: {
    type: String,
    required: true,
  },
  

});
module.exports = mongoose.model("Leads_db", data_schema3);
