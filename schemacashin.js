const mongoose = require("mongoose");
const data_schema5 = new mongoose.Schema({
    selectedStudents: {
        type: String,
        required: true,
      },
      
  payingAmount: {
    type: String,
    required: true,
  },
  remainingAmount: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
 
 
});
module.exports = mongoose.model("cashin_db", data_schema5);
