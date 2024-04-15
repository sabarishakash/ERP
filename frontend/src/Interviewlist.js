import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { delete_url2, get_url2 } from "./URL/url";
import { Link } from "react-router-dom";
import "./interviewlist.css";

const Interviewlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);

  useEffect(() => {
    axios.get(get_url2).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

  const del = (v) => {
    axios.delete(`${delete_url2}/${v._id}`).then(() => {
      setref(!ref);
    });
  };

  return (
    <>
      <div>
        <h1>Interview Details</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="bg-primary">S.No</th>
              <th className="bg-primary">Name</th>
              <th className="bg-primary">Mobile</th>
              <th className="bg-primary">Address</th>
              <th className="bg-primary">Email</th>
              <th className="bg-primary">Interview Status</th>
              <th className="bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.name}</td>
                <td className="text">{v.mobile}</td>
                <td className="text">{v.address}</td>
                <td className="text">{v.email}</td>
                <td className="text">{v.interviewStatus}</td>
                <td>
                  <div className="btn-group">
                    <button className="btn btn-danger" onClick={() => del(v)}>
                      Delete
                    </button>
                    <button className="edit btn btn-secondary">
                      <Link to={`/update2/${v._id}`}>Edit</Link>
                    </button>
                    <button className="btn btn-primary view">
                      <Link to={`/view1/${v._id}`}>View</Link>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Interviewlist;
