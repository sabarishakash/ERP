import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url1, get_url1 } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
const Studentlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);

  useEffect(() => {
    axios.get(get_url1).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  const del = (v) => {
    axios.delete(`${delete_url1}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };

  return (
    <>
      
        <h1> Students List</h1>
        
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th  className="bg-primary">S.No</th>
              <th className="bg-primary">Student-Id</th>
              <th className="bg-primary">Firstname</th>
              <th className="bg-primary">Lastname</th>
              <th className="bg-primary">Fathername</th>
              <th className="bg-primary">Email</th>
              <th className="bg-primary">Address</th>
              <th className="bg-primary">Dateof birth</th>
              <th className="bg-primary">Contact</th>
              <th className="bg-primary"> Gender</th>
              <th className="bg-primary">Maritalstatus</th>
              <th className="bg-primary"> TotalAmount</th>
              <th className="bg-primary"> PaidAmount</th>
              <th className="bg-primary">RemainingAmount</th>
              <th className="bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.studentId}</td>
                <td className="text">{v.firstname}</td>
                <td className="text">{v.lastname}</td>
                <td className="text">{v.fathername}</td>
                <td className="text">{v.email}</td>
                <td className="text">{v.address}</td>
                <td className="text">{v.dob}</td>
                <td className="text">{v.contact}</td>
                <td className="text">{v.gender}</td>
                <td className="text">{v.maritalstatus}</td>
                <td className="text">{v.totalAmount}</td>
                <td className="text">{v.paidAmount}</td>
                <td className="text">{v.remainingAmount}</td>
                <td>
                  <div className="click">
                    <button onClick={() => del(v)}> delete</button>
                    <button>
                      <Link to={`/update/${v._id}`}> Edit</Link>
                    </button>
                    <button>
                      {" "}
                      <Link to={`/view/${v._id}`}> view</Link>
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
export default Studentlist;
