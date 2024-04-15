import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {get_url3, update_url3} from "./URL/url";
import("./studentdetails.css");

function Leadsedit() {
  const { id } = useParams();

  const history = useNavigate();
  const [Leads, setLeads] = useState({
    name: "",
    mobileNo: "",
    
    
    alternateMobileNo: "",
   
    city: "",
    passedOutYear: "",
    qualification:"",
    course:"",
    date:"",
    status:"",
    callLaterTime:"",
    callHistory:"",
    extraDate:"",
    extraTime: "",
    spoked: "",
  });
  useEffect(() => {
    axios
      .get(`${get_url3}/${id}`)
      .then((res) => {
        setLeads(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log("Student ID:", id);

  const handleUpdate = () => {
    axios
      .put(`${update_url3}/${id}`, Leads)
      .then(() => {
        history("/leadslist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/leadslist");
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
        <h2>Update Leads</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={Leads.name}
              onChange={(e) => {
                setLeads({ ...Leads, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Mobile No:</label>
            <input
              type="text"
              name="mobile"
              value={Leads.mobileNo}
              onChange={(e) => {
                setLeads({ ...Leads, mobile: e.target.value });
              }}
            />
          </div>
          
          <div>
            <label >Alternate Mobile No:</label>
            <input
              type="text"
             
              value={Leads.alternateMobileNo}
              onChange={(e) =>
                setLeads({ ...Leads, alternateMobileNo: e.target.value })
              }
            />
          </div>
          <div>
            <label >City:</label>
            <input
              type="text"
              
              value={Leads.city}
              onChange={(e) =>
                setLeads({ ...Leads, city: e.target.value })
              }
            />
          </div>
          
          <div>
            <label>Passed Out Year:</label>
            <input
              type="text"
             
              value={Leads.passedOutYear}
              onChange={(e) =>
                setLeads({ ...Leads, passedOutYear: e.target.value })
              }
            />
          </div>
          <div>
            <label>Qualification:</label>
            <input
              type="text"
             
              value={Leads.qualification}
              onChange={(e) =>
                setLeads({ ...Leads, qualification: e.target.value })
              }
            />
          </div>
          <div>
            <label>Course:</label>
            <input
              type="text"
             
              value={Leads.course}
              onChange={(e) =>
                setLeads({ ...Leads, course: e.target.value })
              }
            />
          </div>
          
          <div>
            <label>Date:</label>
            <input
              type="text"
             
              value={Leads.date}
              onChange={(e) =>
                setLeads({ ...Leads, date: e.target.value })
              }
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
             
              value={Leads.status}
              onChange={(e) =>
                setLeads({ ...Leads, status: e.target.value })
              }
            />
          </div>
          <div>
            <label>Call Later Time:</label>
            <input
              type="text"
             
              value={Leads.callLaterTime}
              onChange={(e) =>
                setLeads({ ...Leads, callLaterTime: e.target.value })
              }
            />
          </div>
          <div>
            <label>Call History:</label>
            <input
              type="text"
             
              value={Leads.callHistory}
              onChange={(e) =>
                setLeads({ ...Leads, callHistory: e.target.value })
              }
            />
          </div>
          <div>
            <label>Extra Date:</label>
            <input
              type="text"
             
              value={Leads.extraDate}
              onChange={(e) =>
                setLeads({ ...Leads, extraDate: e.target.value })
              }
            />
          </div>
          <div>
            <label>Extra Time:</label>
            <input
              type="text"
             
              value={Leads.extraTime}
              onChange={(e) =>
                setLeads({ ...Leads, extraTime: e.target.value })
              }
            />
          </div>
          <div>
            <label>Spoked:</label>
            <input
              type="text"
             
              value={Leads.spoked}
              onChange={(e) =>
                setLeads({ ...Leads, spoked: e.target.value })
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

export default Leadsedit;
