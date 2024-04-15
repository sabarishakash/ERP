import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_url3 } from "./URL/url";
import "./view.css";
import("./studentdetails.css");

function Leadsview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [view, setview] = useState({
    name: "",
    mobileNo: "",
    
   
    alternateMobileNo: "",
    city:"",
      passedOutYear:"",
      qualification:"",
      course:"",
      date:"",
      status:"",
      callLaterTime:"",
      callHistory:"",
      extraDate:"",
      extraTime:"",
    spoked:"",
   
  });

  useEffect(() => {
    axios.get(`${get_url3}/${id}`).then((res) => {
      console.log(res.data);
      setview(res.data);
    });
  }, [id]);
  const backfun = () => {
    navigate("/leadslist");
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
            <span>Mobile No:</span>
            {view.mobileNo}
          </p>
          
          <p>
            <span>Alternate Mobile No:</span>
            {view.alternateMobileNo}
          </p>
          <p>
            <span>City:</span>
            {view.city}
          </p>
         
          <p>
            <span>Passed Out Year:</span>
            {view.passedOutYear}
          </p>
          <p>
            <span>Qualification:</span>
            {view.qualification}
          </p>
          <p>
            <span>Course:</span>
            {view.course}
          </p>
          <p>
            <span>Date:</span>
            {view.date}
          </p>
          <p>
            <span>Status:</span>
            {view.status}
          </p>
          <p>
            <span>call Later Time:</span>
            {view.callLaterTime}
          </p>
          <p>
            <span>Call History:</span>
            {view.callHistory}
          </p>
          <p>
            <span>Extra Date:</span>
            {view.extraDate}
          </p>
          <p>
            <span>Extra Time:</span>
            {view.extraTime}
          </p>
          <p>
            <span>Spoked:</span>
            {view.spoked}
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
export default Leadsview;
