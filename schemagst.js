const mongoose = require("mongoose");
const data_schema8 = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
      },
      finalTotal: {
    type: String,
    required: true,
  },
 

 
});
module.exports = mongoose.model("GST_db", data_schema8);
