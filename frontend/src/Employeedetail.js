import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_url1, post_url7 } from "./URL/url";
import "./studentslist.css";
import "./studentdetails.css";
import { useNavigate,Link } from "react-router-dom";

const Employeedetail = () => {
  const [employeename, setEmployeeName] = useState("");
  const [lastname, setlastname] = useState("");
  const [fathername, setfathername] = useState("");
  const[mothername,setMothername]=useState("")

  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  const [designation, setdesignation] = useState("");
  const [salary,setsalary] = useState("");
 const[dateofjoining,setdateofjoining]=useState("")
 const[dateofreleiving,setdateofreleiving]=useState("")
 const[experience,setexperience]=useState("")
  let navigate = useNavigate();

  
  const post_data1 = async () => {
    await axios.post(post_url7, {
      employeename,
      lastname,
      fathername,
      mothername,
      dateofbirth,
      email,
      contactnumber,
    
     
      designation,
      salary,
      dateofjoining,
      dateofreleiving,
      experience,
    });
    navigate("/Employeelist");
  };

  return (
    <>
      <div className="Container">
      <h2>EMPLOYEE ENTRY FORM</h2>
      <div className="box">
        <Link className="one" to="/Employeeform">
          <i id="add" class="fa-solid fa-users"></i>
          <h2>Add Employee</h2>
        </Link>
        <Link className="two" to="/Employeelist">
          <i id="view" class="fa-solid fa-users"></i>
          <h2>View Employee</h2>
        </Link>
      </div>
        <h1>Employee Details</h1>
        <div>
          <form>
            <label>Employee Name:</label>
            <input
              type="text"
              value={employeename}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
            <br />
            <label>Lastname:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <br />
            <label>Fathername:</label>
            <input
              type="text"
              value={fathername}
              onChange={(e) => setfathername(e.target.value)}
            />
            <br />
            <label>Mother Name:</label>
            <input
              type="text"
              value={mothername}
              onChange={(e) => setMothername(e.target.value)}
            />
            <br />
            <label>Date of Birth:</label>
            <input
              type="text"
              value={dateofbirth}
              onChange={(e) => setdateofbirth(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
             <label>Contact Number:</label>
            <input
              type="number"
              value={contactnumber}
              onChange={(e) => setcontactnumber(e.target.value)}
            />
            <br />
            <br />
            <label>Designation:</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setdesignation(e.target.value)}
            />
            
           
            <br />

           

            <label>salary:</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
            />
            <br />
            <label>Date of Joining:</label>
            <input
              type="number"
              value={dateofjoining}
              onChange={(e) => setdateofjoining(e.target.value)}
            />
            <br />
            <label>Date of Releiving:</label>
            <input
              type="number"
              value={dateofreleiving}
              onChange={(e) => setdateofreleiving(e.target.value)}
            />
            <br />
            <label>Experience:</label>
            <input
              type="number"
              value={experience}
              onChange={(e) => setexperience(e.target.value)}
            />
            <br />
          </form>
        </div>

        <button type="submit" onClick={post_data1}>
          click
        </button>
      </div>
    </>
  );
};
export default Employeedetail;
