const mongoose = require("mongoose");
const data_schema = require("./schema.js");
const data_schema1 = require("./schema_1.js");
const data_schema2 = require("./schemaint.js");
const data_schema3=require("./schemaleads.js");
const data_schema4=require("./schemaattendance.js");
const data_schema5=require("./schemacashin.js");
const data_schema6=require("./schemacustomer.js");
const data_schema7=require("./schemaemployee.js");
const data_schema8=require("./schemagst.js");
const data_schema9=require("./schemacashcustomer.js");
const data_schema10=require("./schemastudentidlist.js");

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
const post_data2 = async (req, res) => {
  const data = new data_schema2({
    ...req.body,
  });

  const save_data = await data.save();
  res.json(save_data);
};
const post_data3 = async (req, res) => {
  const data = new data_schema3({
    ...req.body,
  });

  const save_data = await data.save();
  res.json(save_data);
};
const post_data4 = async (req, res) => {
  const data = new data_schema4({
    ...req.body,
  });

  const save_data = await data.save();
  res.json(save_data);
};
const post_data5 = async (req, res) => {
  const data = new data_schema5({
    ...req.body,
  });

  const save_data = await data.save();
  res.json(save_data);
};
const post_data6=async(req,res)=>{
  const data=new data_schema6({
    ...req.body,
  })
  const save_data = await data.save();
  res.json(save_data);
}
const post_data7=async(req,res)=>{
  const data=new data_schema7({
    ...req.body,
  })
  const save_data = await data.save();
  res.json(save_data);
}
const post_data8=async(req,res)=>{
  const data=new data_schema8({
    ...req.body,
  })
  const save_data = await data.save();
  res.json(save_data);
}
const post_data9=async(req,res)=>{
  const data=new data_schema9({
    ...req.body,
  })
  const save_data = await data.save();
  res.json(save_data);
}
const post_data10=async(req,res)=>{
  const data=new data_schema10({
    ...req.body,
  })
  const save_data = await data.save();
  res.json(save_data);
}
const get_data1 = async (req, res) => {
  const find_data = await data_schema1.find({});
  res.json(find_data);
};
const get_data2 = async (req, res) => {
  const find_data = await data_schema2.find({});
  res.json(find_data);
};
const get_data3 = async (req, res) => {
  const find_data = await data_schema3.find({});
  res.json(find_data);
};
const get_data4 = async (req, res) => {
  const find_data = await data_schema4.find({});
  res.json(find_data);
};
const get_data5 = async (req, res) => {
  const find_data = await data_schema5.find({});
  res.json(find_data);
};
const get_data6 = async (req, res) => {
  const find_data = await data_schema6.find({});
  res.json(find_data);
};
const get_data7 = async (req, res) => {
  const find_data = await data_schema7.find({});
  res.json(find_data);
};
const get_data8 = async (req, res) => {
  const find_data = await data_schema8.find({});
  res.json(find_data);
};
const get_data9 = async (req, res) => {
  const find_data = await data_schema9.find({});
  res.json(find_data);
};
const get_data10 = async (req, res) => {
  const find_data = await data_schema10.find({});
  res.json(find_data);
};
const delete_data1 = async (req, res) => {
  del_data = await data_schema1.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data2 = async (req, res) => {
  del_data = await data_schema2.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data3 = async (req, res) => {
  del_data = await data_schema3.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data4 = async (req, res) => {
  del_data = await data_schema4.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data5 = async (req, res) => {
  del_data = await data_schema5.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data6 = async (req, res) => {
  del_data = await data_schema6.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data7 = async (req, res) => {
  del_data = await data_schema7.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data8 = async (req, res) => {
  del_data = await data_schema8.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data9 = async (req, res) => {
  del_data = await data_schema9.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const delete_data10 = async (req, res) => {
  del_data = await data_schema10.findByIdAndDelete(req.params.id);
  res.json(del_data);
};
const get_up = async (req, res) => {
  const find_data1 = await data_schema1.findById(req.params.id);
  res.json(find_data1);
};
const get_up2 = async (req, res) => {
  const find_data1 = await data_schema2.findById(req.params.id);
  res.json(find_data1);
};
const get_up3 = async (req, res) => {
  const find_data1 = await data_schema3.findById(req.params.id);
  res.json(find_data1);
};
const get_up4 = async (req, res) => {
  const find_data1 = await data_schema4.findById(req.params.id);
  res.json(find_data1);
};
const get_up5 = async (req, res) => {
  const find_data1 = await data_schema5.findById(req.params.id);
  res.json(find_data1);
};
const get_up6 = async (req, res) => {
  const find_data1 = await data_schema6.findById(req.params.id);
  res.json(find_data1);
};
const get_up7 = async (req, res) => {
  const find_data1 = await data_schema7.findById(req.params.id);
  res.json(find_data1);
};
const get_up8 = async (req, res) => {
  const find_data1 = await data_schema8.findById(req.params.id);
  res.json(find_data1);
};
const get_up9 = async (req, res) => {
  const find_data1 = await data_schema9.findById(req.params.id);
  res.json(find_data1);
};
const get_up10 = async (req, res) => {
  const find_data1 = await data_schema10.findById(req.params.id);
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
const update_data2 = async (req, res) => {
  const put_data = await data_schema2.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data3 = async (req, res) => {
  const put_data = await data_schema3.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data4 = async (req, res) => {
  const put_data = await data_schema4.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data5 = async (req, res) => {
  const put_data = await data_schema5.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data6 = async (req, res) => {
  const put_data = await data_schema6.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data7 = async (req, res) => {
  const put_data = await data_schema7.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data8 = async (req, res) => {
  const put_data = await data_schema8.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data9 = async (req, res) => {
  const put_data = await data_schema9.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
const update_data10 = async (req, res) => {
  const put_data = await data_schema10.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(put_data);
};
module.exports = {
  post_data,
  post_data2,
  post_data3,
  post_data4,
  post_data5,
  post_data6,
  post_data7,
  post_data8,
  post_data9,
  post_data10,
  get_data2,
  get_data3,
  get_data4,
  get_data5,
  get_data6,
  get_data7,
  get_data8,
  get_data9,
  get_data10,
  delete_data2,
  delete_data3,
  delete_data4,
  delete_data5,
  delete_data6,
  delete_data7,
  delete_data8,
  delete_data9,
  delete_data10,
  get_up2,
  get_up3,
  get_up4,
  get_up5,
  get_up6,
  get_up7,
  get_up8,
  get_up9,
  get_up10,
  get_data8,
  get_data6,
  update_data2,
  update_data3,
  update_data4,
  update_data5,
  update_data6,
  update_data7,
  update_data8,
  update_data9,
  update_data10,
  get_data,
  post_data1,
  get_data1,
  delete_data1,
  update_data,
  get_up,
};
