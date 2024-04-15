import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_url1,get_url7,get_url6,get_url4 } from "./URL/url";
import "./Dashboard.css"

const Dashboard = ({handleLogOut1}) => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  const [tableLength, setTableLength] = useState(0);
  const[employeelength,setemployeelength]=useState(0);
  const[customerlength,setcustomerlength]=useState(0);
  const[Attendance,setattendance]=useState(0);
  const handleLogOut=()=>{
    handleLogOut1()
  }

  useEffect(() => {
    axios.get(get_url1).then((res) => {
      console.log(res.data);
      setdata1(res.data);
      setTableLength(res.data.length); 
    });
  }, [ref]);
  useEffect(() => {
    axios.get(get_url7).then((res) => {
      console.log(res.data);
      setdata1(res.data);
      setemployeelength(res.data.length);
    });
  }, [ref]);
  useEffect(() => {
    axios.get(get_url6).then((res) => {
      console.log(res.data);
      setdata1(res.data);
      setcustomerlength(res.data.length);
    });
  }, [ref]);
  useEffect(() => {
    axios.get(get_url4).then((res) => {
      setdata1(res.data);
      setattendance(res.data.length);
    });
  }, [ref]);

  return (
    <>
    

        <div className="dashboardbox">
          <div className="EmployeeCount" id="one">
          <h4>Students</h4>
            <p>{tableLength}</p>
            
           
          </div>
          <div className="EmployeeCount" id="two">
          <h4>Employees</h4>
          
            <p>{employeelength}</p>
           
          </div>
          <div className="EmployeeCount" id="three">
          <h4>Customers</h4>
          
            <p>{customerlength}</p>
           
          </div>
          <div className="EmployeeCount" id="four">
          <h4>Attendance</h4>
          
            <p>{Attendance}</p>
           
          </div>
          </div>
         
         
          
       
          <button onClick={handleLogOut}>LogOut</button>
            
       
      
    </>
  );
};

export default Dashboard;
