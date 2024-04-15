import React, { useState, useEffect } from "react";
import axios from "axios";
import { delete_url4, get_url4 } from "./URL/url";
import { Link } from "react-router-dom";
import "./read.css";

const Attendancelist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  
  useEffect(() => {
    axios.get(get_url4).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

  const del = (v) => {
    axios.delete(`${delete_url4}/${v._id}`).then(() => {
      setref(!ref);
    });
  };

  return (
    <div  className="container">
      <div className="Container rounded shadow-lg p-4">
        <h2>Attendance List</h2>
        <div className="box bg-light">
          <Link style={{textDecoration:"none"}} className="two" to="/Addattendanceform">
            <i id="add" className="fa-solid fa-users"></i>
            <h2>Attendance Form</h2>
          </Link>
          <Link style={{textDecoration:"none"}} className="two" to="/Attendancelist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>Attendance List</h2>
          </Link>
        </div>
        <div className="table-container overflow-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-primary">S.No</th>
              
                <th className="bg-primary">selected Students</th>
                <th className="bg-primary">Status</th>
                <th className="bg-primary">In Date</th>
                <th className="bg-primary">In Time</th>
                <th className="bg-primary">Out Date</th>
                <th className="bg-primary">Comments</th>
                <th className="bg-primary">Action</th>
               
              </tr>
            </thead>
            <tbody>
              {data1.map((v, index) => (
                <tr key={v._id}>
                  <td className="table-light">{index + 1}</td>
                 
                  <td className="table-light">{v.selectedStudents}</td>
                  <td className="table-light">{v.status}</td>
                  <td className="table-light">{v.inDate}</td>
                  <td className="table-light">{v.inTime}</td>
                  <td className="table-light">{v.outDate}</td>
                  <td className="table-light">{v.comments}</td>
                 
                  <td className="table-light">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => del(v)}
                      >
                       
                       <i class="fa-solid fa-trash"></i>
                      </button>
                     
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendancelist;
