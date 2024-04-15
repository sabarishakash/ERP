import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url7, update_url7 } from "./URL/url";
import("./studentdetails.css");

function Employeeedit() {
  const { id } = useParams();

  const history = useNavigate();
  const [Employee, setEmployee] = useState({
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
    axios
      .get(`${get_url7}/${id}`)
      .then((res) => {
        setEmployee(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log("Student ID:", id);

  const handleUpdate = () => {
    axios
      .put(`${update_url7}/${id}`, Employee)
      .then(() => {
        history("/Employeelist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/Employeelist");
  };
 
  return (
    <div className="Container">
      <div>
        <h2>Update Employee</h2>
        <form>
          <div>
            <label>Employee Name:</label>
            <input
              type="text"
              name="firstname"
              value={Employee.employeename}
              onChange={(e) => {
                setEmployee({ ...Employee, employeename: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="firstname"
              value={Employee.lastname}
              onChange={(e) => {
                setEmployee({ ...Employee, lastname: e.target.value });
              }}
             
             
            />
          </div>
          <div>

            <label>Father Name:</label>
            <input
              type="text"
              name="lastname"
              value={Employee.fathername}
              onChange={(e) => {
                setEmployee({ ...Employee, fathername: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="fathername">Mother Name:</label>
            <input
              type="text"
              id="fathername"
              value={Employee.mothername}
              onChange={(e) =>
                setEmployee({ ...Employee, mothername: e.target.value })
              }
            />
          </div>
          {/* <div>
            <label htmlFor="mothername">Mother Name:</label>
            <input
              type="text"
              id="mothername"
              value={student.mothername}
              onChange={(e) => setStudent({ ...student,mothername:e.target.value})}

            />
          </div>   */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={Employee.email}
              onChange={(e) =>
                setEmployee({ ...Employee, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={Employee.address}
              onChange={(e) =>
                setEmployee({ ...Employee, address: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Date of Birth:</label>
            <input
              type="text"
              id="address"
              value={Employee.dateofbirth}
              onChange={(e) =>
                setEmployee({ ...Employee, dateofbirth: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Designation:</label>
            <input
              type="text"
              id="address"
              value={Employee.designation}
              onChange={(e) =>
                setEmployee({ ...Employee, designation: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Salary:</label>
            <input
              type="text"
              id="address"
              value={Employee.salary}
              onChange={(e) =>
                setEmployee({ ...Employee, salary: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Date of Joining:</label>
            <input
              type="text"
              id="address"
              value={Employee.dateofjoining}
              onChange={(e) =>
                setEmployee({ ...Employee, dateofjoining: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Date of Releiving:</label>
            <input
              type="text"
              id="address"
              value={Employee.dateofreleiving}
              onChange={(e) =>
                setEmployee({ ...Employee, dateofreleiving: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Experience:</label>
            <input
              type="text"
              id="address"
              value={Employee.experience}
              onChange={(e) =>
                setEmployee({ ...Employee, experience: e.target.value })
              }
            />
          </div>
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Employeeedit;
