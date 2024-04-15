import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_url5 } from "./URL/url";
import "./view.css";
import("./studentdetails.css");

function Cashview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [view, setview] = useState({
    selectedStudents:"",
   
    payingAmount:"",
    remainingAmount:"",
    paymentMethod:"",

   
  });

  useEffect(() => {
    axios.get(`${get_url5}/${id}`).then((res) => {
      console.log(res.data);
      setview(res.data);
    });
  }, [id]);
  const backfun = () => {
    navigate("/Cashlist");
  };
  return (
    <>
      <div className="Container1">
        <h1>Cash Details</h1>
        <div className="student-info">
          <p>
            <span>Vendor Name:</span>
            {view.selectedStudents}
          </p>
          <p>
            <span>Receipt Type:</span>
           Cash-In
          </p>
          
          <p>
            <span>Paying Amount:</span>
            {view.payingAmount}
          </p>
          <p>
            <span>Remaining Amount:</span>
            {view.remainingAmount}
          </p>
          <p>
            <span>Payment Method:</span>
            {view.paymentMethod}
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
export default Cashview;