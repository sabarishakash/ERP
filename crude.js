const mongoose = require("mongoose");
const data_schema = require("./schema.js");
const data_schema1 = require("./schema_1.js");
//cash
const post_data = async (req, res) => {
  const data = new data_schema({
    ...req.body,
  });
  const save_data = await data.save();
  res.json(save_data);
};
//cash
const get_data = async (req, res) => {
  const find_data = await data_schema.find({});
  res.json(find_data);
};
//students
const post_data1 = async (req, res) => {
  const data1 = new data_schema1({
    ...req.body,
  });
  const save_data1 = await data1.save();
  res.json(save_data1);
};
const get_data1 = async (req, res) => {
  const find_data = await data_schema1.find({});
  res.json(find_data);
};
const delete_data1 = async (req, res) => {
  del_data = await data_schema1.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const get_up = async (req, res) => {
  const find_data1 = await data_schema1.findById(req.params.id);
  res.json(find_data1);
};
const update_data = async (req, res) => {
  const put_data = await data_schema1.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
module.exports = {
  post_data,
  get_data,
  post_data1,
  get_data1,
  delete_data1,
  update_data,
  get_up,
};
