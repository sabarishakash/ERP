const mongoose = require("mongoose");

const data_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("cash_dbs", data_schema);
