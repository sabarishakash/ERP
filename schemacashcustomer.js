const mongoose = require("mongoose");
const data_schema9 = new mongoose.Schema({
    selectedStudents: {
        type: String,
        required: true,
      },
      
  payingAmount: {
    type: String,
    required: true,
  },
  remainingBalance: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
 
 
});
module.exports = mongoose.model("cashcustomer_db", data_schema9);
