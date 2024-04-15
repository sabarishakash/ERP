import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url3, get_url3 } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";
import "./read.css";
import "bootstrap/dist/css/bootstrap.min.css"
const Leadsreport = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);
  useEffect(() => {
    axios.get(get_url3).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);


  return (
    <>
      
        <h1>Leads Report</h1>
        
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th  className="bg-primary">S.No</th>
              <th className="bg-primary">Name</th>
              <th className="bg-primary">Mobile No</th>
              <th className="bg-primary">Alternate Mobile No</th>
              <th className="bg-primary">City</th>
              <th className="bg-primary">Passed Out Year</th>
              <th className="bg-primary">Qualification</th>
              <th className="bg-primary">Course</th>
              <th className="bg-primary"> Date</th>
              <th className="bg-primary">Status</th>
              <th className="bg-primary"> Call Later Time</th>
              <th className="bg-primary"> Call History</th>
              <th className="bg-primary">Extra Date</th>
              <th className="bg-primary">Extra Time</th>
              <th className="bg-primary">Spoked</th>
              
            </tr>
          </thead>
          <tbody>
            {data1.map((v, index) => (
              <tr key={v._id}>
                <td className="text">{index + 1}</td>
                <td className="text">{v.name}</td>
                <td className="text">{v.mobileNo}</td>
                <td className="text">{v.alternateMobileNo}</td>
                <td className="text">{v.city}</td>
                <td className="text">{v.passedOutYear}</td>
                <td className="text">{v.qualification}</td>
                <td className="text">{v.course}</td>
                <td className="text">{v.date}</td>
                <td className="text">{v.status}</td>
                <td className="text">{v.callLaterTime}</td>
                <td className="text">{v.callHistory}</td>
                <td className="text">{v.extraDate}</td>
                <td className="text">{v.extraTime}</td>
                <td className="text">{v.spoked}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
     
    </>
  );
};
export default Leadsreport;
