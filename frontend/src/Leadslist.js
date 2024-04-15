import React, { useState, useEffect } from "react";
import axios from "axios";
import { delete_url3, get_url3 } from "./URL/url";
import { Link } from "react-router-dom";
import "./read.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Leadslist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);

  useEffect(() => {
    axios.get(get_url3).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

  const del = (v) => {
    axios.delete(`${delete_url3}/${v._id}`).then(() => {
      setref(!ref);
    });
  };

  return (
    <div  className="container">
      <div className="Container rounded shadow-lg p-4">
        <h2>LEADS LIST</h2>
        <div className="box bg-light">
          <Link style={{textDecoration:"none"}} className="two" to="/Leadsform">
            <i id="add" className="fa-solid fa-users"></i>
            <h2>Leads Form</h2>
          </Link>
          <Link style={{textDecoration:"none"}} className="two" to="/Leadslist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>Leads List</h2>
          </Link>
        </div>
        <div className="table-container overflow-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-primary">S.No</th>
                <th className="bg-primary">Name</th>
                <th className="bg-primary">Mobile No</th>
                <th className="bg-primary">Alternate Mobile No</th>
                <th className="bg-primary">City</th>
                <th className="bg-primary">Passed Out Year</th>
                <th className="bg-primary">Qualification</th>
                <th className="bg-primary">Course</th>
                <th className="bg-primary"> Date</th>
                <th className="bg-primary">Status</th>
                <th className="bg-primary">Spoked To</th>
                <th className="bg-primary"> Call History</th>
                <th className="bg-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((v, index) => (
                <tr key={v._id}>
                  <td className="table-light">{index + 1}</td>
                  <td className="table-light">{v.name}</td>
                  <td className="table-light">{v.mobileNo}</td>
                  <td className="table-light">{v.alternateMobileNo}</td>
                  <td className="table-light">{v.city}</td>
                  <td className="table-light">{v.passedOutYear}</td>
                  <td className="table-light">{v.qualification}</td>
                  <td className="table-light">{v.course}</td>
                  <td className="table-light">{v.date}</td>
                  <td className="table-light">{v.status}</td>
                  <td className="table-light">{v.spoked}</td>
                  <td className="table-light">
                    {v.callLaterTime} called {v.callHistory} times {v.extraDate}
                  </td>
                  <td className="table-light">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => del(v)}
                      >
                       
                       <i class="fa-solid fa-trash"></i>
                      </button>
                      <button type="button" className="btn btn-primary">
                        <Link to={`/update3/${v._id}`} className="text-white" style={{textDecoration:"none"}}>
                        <i class="fa-solid fa-pencil"></i>
                        </Link>
                      </button>
                      <button type="button" className="btn btn-info">
                        <Link to={`/view3/${v._id}`} className="text-white" style={{textDecoration:"none"}}>
                        <i class="fa-solid fa-eye"></i>
                        </Link>
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

export default Leadslist;
