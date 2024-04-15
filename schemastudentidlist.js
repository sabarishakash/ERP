const mongoose = require("mongoose");
const data_schema10 = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
      },
      
 

 
});
module.exports = mongoose.model("StudentId_db", data_schema10);
