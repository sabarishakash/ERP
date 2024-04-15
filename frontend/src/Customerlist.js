import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url6, get_url6 } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css"
const Customerlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);
  useEffect(() => {
    axios.get(get_url6).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  const del = (v) => {
    axios.delete(`${delete_url6}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };

  return (
    <>
      
        
        <div className="Container">
      <h2>Customer List</h2>
      <div className="box">
        <Link className="one" to="/customer">
          <i id="add" class="fa-solid fa-users"></i>
          <h2>Add Customer</h2>
        </Link>
        <Link className="two" to="/customerlist">
          <i id="view" class="fa-solid fa-users"></i>
          <h2>View Customer</h2>
        </Link>
      </div>
        
        <table className="table table-bordered" style={{marginLeft:"-1px"}}>
          <thead>
            <tr>
              <th  className="bg-primary">S.No</th>
              <th className="bg-primary">Customer Name</th>
             
             
              <th className="bg-primary">Address</th>
              <th className="bg-primary">Date</th>
              <th className="bg-primary">State</th>
              <th className="bg-primary"> Phone Number</th>
              <th className="bg-primary">GSTIN</th>
             
              <th className="bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.customerName}</td>
                <td className="text">{v.address}</td>
                <td className="text">{v.date}</td>
                <td className="text">{v.state}</td>
                <td className="text">{v.phoneno}</td>
                <td className="text">{v.gstin}</td>
                
                <td>
                  <div className="click">
                    <button onClick={() => del(v)}> delete</button>
                    <button>
                      <Link to={`/update6/${v._id}`}> Edit</Link>
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
export default Customerlist;
