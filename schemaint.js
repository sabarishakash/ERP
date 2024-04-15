const mongoose = require("mongoose");
const data_schema2 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
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
  
  interviewStatus: {
    type: String,
    required: true,
  },
 
});
module.exports = mongoose.model("int_db", data_schema2);
