import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_url1 } from "./URL/url";
import "./view.css";
import("./studentdetails.css");

function Studentview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [view, setview] = useState({
    selectedStudentId:"",
    firstname: "",
    lastname: "",
    fathername: "",
    // mothername:"",
    email: "",
    address: "",
    dob: "",
    contact: "",

    maritalstatus: "",
    gender: "",
    totalAmount: "",
    paidAmount: "",
    remainingAmount: "",
  });

  useEffect(() => {
    axios.get(`${get_url1}/${id}`).then((res) => {
      console.log(res.data);
      setview(res.data);
    });
  }, [id]);
  
  const backfun = () => {
    navigate("/studentlist");
  };

  return (
    <>
      <div className="Container1">
        <h1>Students Details</h1>
        <div className="student-info">
        <p>
            <span>Student-Id:</span>
            {view.selectedStudentId}
          </p>
          <p>
            <span>Firstname:</span>
            {view.firstname}
          </p>
          <p>
            <span>Lastname:</span>
            {view.lastname}
          </p>
          <p>
            <span>Fathertname:</span>
            {view.fathername}
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
            <span>Date od Birth:</span>
            {view.address}
          </p>
          <p>
            <span>Contact:</span>
            {view.contact}
          </p>
          <p>
            <span>Gender:</span>
            {view.gender}
          </p>
          <p>
            <span>Maritalstatus:</span>
            {view.maritalstatus}
          </p>
          <p>
            <span>TotalAmount:</span>
            {view.totalAmount}
          </p>
          <p>
            <span>PaidAmount:</span>
            {view.paidAmount}
          </p>
          <p>
            <span>RemainingAmount:</span>
            {view.remainingAmount}
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
export default Studentview;
