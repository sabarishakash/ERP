const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
const router = require("./router");
const data_schema10 = require("./schemalogin");
// const multer = require("multer");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api", router);
mongoose
  .connect("mongodb://127.0.0.1:27017/Student-Employee-Details")
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });

  app.get("/read", async (req, res) => {
    const find_data = await data_schema10.find({});
    res.json(find_data);
  });

  app.post("/create", async (req, res) => {
    plaintxt = req.body.password.toString();
    const hashpassword = await bcrypt.hash(plaintxt, 7);
    const data = new data_schema10({
      ...req.body,
      password: hashpassword,
    });
    const save_data = await data.save();
    res.json(save_data);
  });
  app.post("/login", async (req, res) => {
    const username = await data_schema10.findOne({ name: req.body.name });
    if (!username) return res.json("Username  not valid");
  
    const userpassword = await bcrypt.compare(
      req.body.password,
      username.password
    );
    if (!userpassword)
      return res.json({
        message: "Not valid",
      });
  
    // const token = jwt.sign({ id: usermail._id }, process.env.TOKEN);
    res.json({ message: "login success" });
    // res.json("log in succes");
  });
  app.put("/update/:id", async (req, res) => {
    const update_data = await data_schema10.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
  
    res.json(update_data);
  });
  
  app.delete("/delete/:id", async (req, res) => {
    const delete_data = await data_schema10.findByIdAndDelete(req.params.id);
    res.json({
      message: "deleted",
      del_date: delete_data,
    });
  });
  app.listen(2004, () => {
    console.log("server is connected:2004");
  });

//img
// const mystr = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + " " + file.originalname);
//   },
// });



// img
// const upload = multer({
//   storage: mystr,
// });

// app.post("/api", upload.single("image"), (req, res) => {
//   try {
//     res.json("file succesfully submited");
//   } catch (error) {
//     res.json("error");
//   }
// });
