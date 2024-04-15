import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_url2 } from "./URL/url";
import "./view.css";
import("./studentdetails.css");

function Interviewview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [view, setview] = useState({
    name: "",
    mobile: "",
    
   
    email: "",
    address: "",
  
    interviewStatus: "",
   
  });

  useEffect(() => {
    axios.get(`${get_url2}/${id}`).then((res) => {
      console.log(res.data);
      setview(res.data);
    });
  }, [id]);
  const backfun = () => {
    navigate("/interviewlist");
  };
  return (
    <>
      <div className="Container1">
        <h1>Interview Details</h1>
        <div className="student-info">
          <p>
            <span>Name:</span>
            {view.name}
          </p>
          <p>
            <span>Mobile:</span>
            {view.mobile}
          </p>
          
          <p>
            <span>Email:</span>
            {view.email}
          </p>
          <p>
            <span>Address:</span>
            {view.address}
          </p>
         
          <p>
            <span>Interview Status:</span>
            {view.interviewStatus}
          </p>
        
        </div>
        <button className="back" onClick={backfun}>
          {" "}
          Back
        </button>
      </div>
    </>
  );
}
export default Interviewview;
