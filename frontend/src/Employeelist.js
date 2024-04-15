import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url7, get_url7 } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
const Employeelist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);
  useEffect(() => {
    axios.get(get_url7).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  const del = (v) => {
    axios.delete(`${delete_url7}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };

  return (
    <>
      
        <h1>Employee List</h1>
        
        <div className="box">
            <Link className="one" to="/EmployeeDetails1">
              <i id="add1" class="fa-solid fa-users"></i>
              <h2>Add Employee</h2>
            </Link>
            <Link className="two" to="/EmployeeList1">
              <i id="view1" class="fa-solid fa-users"></i>
              <h2>View Employee</h2>
            </Link>
          </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th  className="bg-primary">S.No</th>
              <th className="bg-primary">Employee Name</th>
              <th className="bg-primary">Last Name</th>
              <th className="bg-primary">Father Name</th>
              <th className="bg-primary">Mother Name</th>
              <th className="bg-primary">Date of Birth</th>
              <th className="bg-primary">Email</th>
            
             
              <th className="bg-primary"> Contact Number</th>
              <th className="bg-primary">Designation</th>
              <th className="bg-primary"> Salary</th>
              <th className="bg-primary"> Date of Joining</th>
              <th className="bg-primary">Date of Releiving</th>
              <th className="bg-primary">Experience</th>
              <th className="bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.employeename}</td>
                <td className="text">{v.lastname}</td>
                <td className="text">{v.fathername}</td>
                <td className="text">{v.mothername}</td>
                <td className="text">{v.dateofbirth}</td>
                <td className="text">{v.email}</td>
                <td className="text">{v.contactnumber}</td>
               
               
                <td className="text">{v.designation}</td>
                <td className="text">{v.salary}</td>
                <td className="text">{v.dateofjoining}</td>
                <td className="text">{v.dateofreleiving}</td>
                <td className="text">{v.experience}</td>
                <td>
                  <div className="click">
                    <button onClick={() => del(v)}> delete</button>
                    <button>
                      <Link to={`/update7/${v._id}`}> Edit</Link>
                    </button>
                    <button>
                      {" "}
                      <Link to={`/view7/${v._id}`}> view</Link>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
    </>
  );
};
export default Employeelist;
