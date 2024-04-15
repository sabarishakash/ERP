import React, { useState, useEffect } from "react";
import axios from "axios";
import { delete_url9, get_url9} from "./URL/url";
import { Link } from "react-router-dom";
import "./read.css";

const Cashcustomerlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  
  useEffect(() => {
    axios.get(get_url9).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

  const del = (v) => {
    axios.delete(`${delete_url9}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };


  return (
    <div  className="container">
      <div className="Container rounded shadow-lg p-4">
      <h1>Cash Customer</h1>
        
        <div className="table-container overflow-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-primary">S.No</th>
              
                <th className="bg-primary">Customer Name</th>
                <th className="bg-primary">Receipt Type</th>
              
                <th className="bg-primary">Paying Amount</th>
                <th className="bg-primary">Final Amount</th>
                <th className="bg-primary">Payment Method</th>
                
                <th className="bg-primary">Action</th>
               
              </tr>
            </thead>
            <tbody>
              {data1.map((v, index) => (
                <tr key={v._id}>
                  <td className="table-light">{index + 1}</td>
                 
                  <td className="table-light">{v.selectedStudents}</td>
                  <td className="table-light">Cash-In</td>
                 
                  <td className="table-light">{v.payingAmount}</td>
                  <td className="table-light">{v.remainingBalance}</td>
                  <td className="table-light">{v.paymentMethod}</td>
                  
                  <td>
                  <div className="click">
                  
                    <button>
                      <Link to={`/update9/${v._id}`}>Pay Now</Link>
                    </button>
                    <button>
                      {" "}
                      <Link to={`/view9/${v._id}`}> view</Link>
                    </button>
                    <button onClick={() => del(v)}> delete</button>
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

export default Cashcustomerlist;
