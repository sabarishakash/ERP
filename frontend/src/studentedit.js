import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url1, update_url } from "./URL/url";
import("./studentdetails.css");

function Studentedit() {
  const { id } = useParams();

  const history = useNavigate();
  const [student, setStudent] = useState({
    selectedStudentId:"",
    firstname: "",
    lastname: "",
    fathername: "",
    // mothername:"",
    email: "",
    address: "",
    dob: "",
    contact: "",
    fathernumber: "",
    maritalstatus: "",
    gender: "",
    totalAmount: "",
    paidAmount: "",
    remainingAmount: "",
  });
  useEffect(() => {
    axios
      .get(`${get_url1}/${id}`)
      .then((res) => {
        setStudent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log("Student ID:", id);

  const handleUpdate = () => {
    axios
      .put(`${update_url}/${id}`, student)
      .then(() => {
        history("/studentlist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/studentlist");
  };
  useEffect(() => {
    const newRemainingAmount = student.totalAmount - student.paidAmount;
    setStudent(newRemainingAmount);
  }, [student.totalAmount, student.paidAmount]);

  const handleTotalAmountChange = () => {
    setStudent(30000);
  };

  const handlePaidAmountChange = (e) => {
    setStudent({ ...student, paidAmount: e.target.value });
  };
  return (
    <div className="Container">
      <div>
        <h2>Update Student</h2>

        <form>
        <div>
            <label>Student-Id:</label>
            <input
              type="text"
              name="firstname"
              value={student.selectedStudentId}
              onChange={(e) => {
                setStudent({ ...student, selectedStudentId: e.target.value });
              }}
            />
          </div>

          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={student.firstname}
              onChange={(e) => {
                setStudent({ ...student, firstname: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={student.lastname}
              onChange={(e) => {
                setStudent({ ...student, lastname: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="fathername">Father Name:</label>
            <input
              type="text"
              id="fathername"
              value={student.fathername}
              onChange={(e) =>
                setStudent({ ...student, fathername: e.target.value })
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
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={student.address}
              onChange={(e) =>
                setStudent({ ...student, address: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={student.dob}
              onChange={(e) => setStudent({ ...student, dob: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              id="contact"
              value={student.contact}
              onChange={(e) =>
                setStudent({ ...student, contact: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="fathernumber">Father Number:</label>
            <input
              type="tel"
              id="fathernumber"
              value={student.fathernumber}
              onChange={(e) =>
                setStudent({ ...student, fathernumber: e.target.value })
              }
            />
          </div>
          <div>
            <label>Marital Status:</label>
            <label htmlFor="maritalYes">
              <input
                type="checkbox"
                id="maritalYes"
                value="yes"
                checked={student.maritalstatus === "yes"}
                onChange={(e) =>
                  setStudent({ ...student, maritalstatus: e.target.value })
                }
              />
              Yes
            </label>
            <label htmlFor="maritalNo">
              <input
                type="checkbox"
                id="maritalNo"
                value="no"
                checked={student.maritalstatus === "no"}
                onChange={(e) =>
                  setStudent({ ...student, maritalstatus: e.target.value })
                }
              />
              No
            </label>
          </div>

          <div>
            <label>Gender:</label>
            <label htmlFor="male">
              <input
                type="checkbox"
                id="male"
                value="male"
                checked={student.gender === "male"}
                onChange={(e) =>
                  setStudent({ ...student, gender: e.target.value })
                }
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="checkbox"
                id="female"
                value="female"
                checked={student.gender === "female"}
                onChange={(e) =>
                  setStudent({ ...student, gender: e.target.value })
                }
              />
              Female
            </label>
          </div>
          <div>
            <label htmlFor="totalAmount">Total Amount:</label>
            <input
              type="number"
              id="totalAmount"
              value={student.totalAmount}
              readOnly // Make this field read-only
              // onChange={(e) => setStudent({ ...student,totalAmount:e.target.value})}
              onChange={handleTotalAmountChange}
            />
          </div>
          <div>
            <label htmlFor="paidAmount">Paid Amount:</label>
            <input
              type="number"
              id="paidAmount"
              value={student.paidAmount}
              // onChange={(e) => setStudent({ ...student,paidAmount:e.target.value})}
              onChange={handlePaidAmountChange}
            />
          </div>
          <div>
            <label htmlFor="remainingAmount">Remaining Amount:</label>
            <input
              type="number"
              id="remainingAmount"
              value={student.remainingAmount}
              readOnly
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

export default Studentedit;
