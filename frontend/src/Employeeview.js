import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_url7 } from "./URL/url";
import "./view.css";
import("./studentdetails.css");

function Employeeview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [view, setview] = useState({
    employeename:"",
    lastname:"",
    fathername:"",
    mothername:"",
    email:"",
    address:"",
    dateofbirth:"",
   
    designation:"",
    salary:"",
    dateofjoining:"",
    dateofreleiving:"",
    experience:"",

   
  });

  useEffect(() => {
    axios.get(`${get_url7}/${id}`).then((res) => {
      console.log(res.data);
      setview(res.data);
    });
  }, [id]);
  const backfun = () => {
    navigate("/Employeelist");
  };
  return (
    <>
      <div className="Container1">
        <h1>Employee Details</h1>
        <div className="student-info">
          <p>
            <span>Employee Name:</span>
            {view.employeename}
          </p>
          <p>
            <span>Receipt Type:</span>
           Cash-In
          </p>
          <p>
            <span>Last Name:</span>
            {view.lastname}
          </p>
          <p>
            <span>Father Name:</span>
            {view.fathername}
          </p>
          <p>
            <span>Mother Name:</span>
            {view.mothername}
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
            <span>Date of Birth:</span>
            {view.dateofbirth}
          </p>
          <p>
            <span>Designation:</span>
            {view.designation}
          </p>
          <p>
            <span>Date of Joining:</span>
            {view.dateofjoining}
          </p>
          <p>
            <span>Date of Releiving:</span>
            {view.dateofreleiving}
          </p>
          <p>
            <span>Experience:</span>
            {view.experience}
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
export default Employeeview;
