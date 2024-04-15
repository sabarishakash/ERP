import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url2, update_url2 } from "./URL/url";
import("./studentdetails.css");

function Interviewedit() {
  const { id } = useParams();

  const history = useNavigate();
  const [interview, setInterview] = useState({
    name: "",
    mobile: "",
    
    
    email: "",
   
    interviewStatus: "",
    address: "",
    
  });
  useEffect(() => {
    axios
      .get(`${get_url2}/${id}`)
      .then((res) => {
        setInterview(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log("Student ID:", id);

  const handleUpdate = () => {
    axios
      .put(`${update_url2}/${id}`, interview)
      .then(() => {
        history("/interviewlist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/interviewlist");
  };
//   useEffect(() => {
//     const newRemainingAmount = student.totalAmount - student.paidAmount;
//     setStudent(newRemainingAmount);
//   }, [student.totalAmount, student.paidAmount]);

//   const handleTotalAmountChange = () => {
//     setStudent(30000);
//   };

//   const handlePaidAmountChange = (e) => {
//     setStudent({ ...student, paidAmount: e.target.value });
//   };
  return (
    <div className="Container">
      <div>
        <h2>Update Student</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={interview.name}
              onChange={(e) => {
                setInterview({ ...interview, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={interview.mobile}
              onChange={(e) => {
                setInterview({ ...interview, mobile: e.target.value });
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={interview.email}
              onChange={(e) =>
                setInterview({ ...interview, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={interview.address}
              onChange={(e) =>
                setInterview({ ...interview, address: e.target.value })
              }
            />
          </div>
          
          <div>
            <label htmlFor="interview">Interview Status:</label>
            <input
              type="tel"
              id="interview"
              value={interview.interviewStatus}
              onChange={(e) =>
                setInterview({ ...interview, interviewStatus: e.target.value })
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

export default Interviewedit;
