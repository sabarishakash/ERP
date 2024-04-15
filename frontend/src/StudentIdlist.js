import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url10, get_url10 } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
const StudentIdlist = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);
  useEffect(() => {
    axios.get(get_url10).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  const del = (v) => {
    axios.delete(`${delete_url10}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };

  return (
    <>
      
        <h1> Master List</h1>
        
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th  className="bg-primary">S.No</th>
              <th className="bg-primary">Student-Id</th>
              
              <th className="bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.studentId}</td>
                
                <td>
                  <div className="click">
                    <button onClick={() => del(v)}> delete</button>
                    <button>
                      <Link to={`/update10/${v._id}`}> Edit</Link>
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
export default StudentIdlist;
