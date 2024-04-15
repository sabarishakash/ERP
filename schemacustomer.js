const mongoose = require("mongoose");
const data_schema6 = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
      },
      address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
   gstin: {
    type: String,
    required: true,
  },
 
 
});
module.exports = mongoose.model("customer_db", data_schema6);
