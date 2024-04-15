import React, { useState, useEffect } from "react";
import axios from "axios";
import { delete_url3, get_url8 } from "./URL/url";
import { Link } from "react-router-dom";
import "./read.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const GSTlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);

  useEffect(() => {
    axios.get(get_url8).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

 

  return (
    <div  className="container">
      <div className="Container rounded shadow-lg p-4">
        <h2>GST LIST</h2>
        <div className="box bg-light">
          <Link style={{textDecoration:"none"}} className="two" to="/Leadsform">
            <i id="add" className="fa-solid fa-users"></i>
            <h2>GST Form</h2>
          </Link>
          <Link style={{textDecoration:"none"}} className="two" to="/Leadslist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>GST List</h2>
          </Link>
        </div>
        <div className="table-container overflow-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-primary">S.No</th>
                <th className="bg-primary">Customer Name</th>
                <th className="bg-primary">Final Total</th>
                
              </tr>
            </thead>
            <tbody>
              {data1.map((v, index) => (
                <tr key={v._id}>
                  <td className="table-light">{index + 1}</td>
                  <td className="table-light">{v.customerName}</td>
                  <td className="table-light">{v.finalTotal}</td>
                 
                 
                    
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GSTlist;
