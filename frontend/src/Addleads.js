import axios from "axios";
import React, { useState } from "react";
import { post_url3 } from "./URL/url";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Leadsform = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [alternateMobileNo, setAlternateMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [passedOutYear, setPassedOutYear] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [callLaterTime, setCallLaterTime] = useState("");
  const [callHistory, setCallHistory] = useState("");
  const [extraDate, setExtraDate] = useState("");
  const [extraTime, setExtraTime] = useState("");
  const [spoked, setSpoked] = useState("");
  let navigate = useNavigate();

  const post_data1 = async () => {
    await axios.post(post_url3, {
      name,
      mobileNo,
      alternateMobileNo,
      city,
      passedOutYear,
      qualification,
      course,
      date,
      status,
      callLaterTime,
      callHistory,
      extraDate,
      extraTime,
      spoked,
    });
    navigate("/leadslist");
  };

  return (
    <div className="container mt-5">
      <div className="Container">
        <h2>ADD LEADS</h2>
        <div className="box">
          <Link style={{textDecoration:"none"}} className="one" to="/Leadsform">
            <i id="add" className="fa-solid fa-users"></i>
            <h2> Leads Form</h2>
          </Link>
          <Link style={{textDecoration:"none"}} className="two" to="/Leadslist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>Leads List</h2>
          </Link>
        </div>
        <h1 className="mb-4">Leads</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNo" className="form-label">
            Mobile No:
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alternateMobileNo" className="form-label">
            Alternate Mobile No:
          </label>
          <input
            type="text"
            className="form-control"
            id="alternateMobileNo"
            value={alternateMobileNo}
            onChange={(e) => setAlternateMobileNo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passedOutYear" className="form-label">
            Passed Out Year:
          </label>
          <input
            type="text"
            className="form-control"
            id="passedOutYear"
            value={passedOutYear}
            onChange={(e) => setPassedOutYear(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="qualification" className="form-label">
            Qualification:
          </label>
          <input
            type="text"
            className="form-control"
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Course:
          </label>
          <select
            id="course"
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select an action</option>
            <option value="Interested">Interested</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Joined">Joined</option>
            <option value="Not Joined">Not Joined</option>
            <option value="Discussed">Discussed</option>
            <option value="Call Later">Call Later</option>
          </select>
          {status === "Call Later" && (
            <div className="mb-3">
              <label htmlFor="callLaterTime" className="form-label">
                Call Later Time:
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="callLaterTime"
                value={callLaterTime}
                onChange={(e) => setCallLaterTime(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="callHistory" className="form-label">
            Call History:
          </label>
          <select
            id="callHistory"
            className="form-select"
            value={callHistory}
            onChange={(e) => setCallHistory(e.target.value)}
          >
            <option value="">No of Times Called</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="extraDate" className="form-label">
            Extra Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="extraDate"
            value={extraDate}
            onChange={(e) => setExtraDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="extraTime" className="form-label">
            Extra Time:
          </label>
          <input
            type="time"
            className="form-control"
            id="extraTime"
            value={extraTime}
            onChange={(e) => setExtraTime(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="spoked" className="form-label">
            Spoke:
          </label>
          <select
            id="spoked"
            className="form-select"
            value={spoked}
            onChange={(e) => setSpoked(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="Aravind">Aravind</option>
            <option value="Deepthi">Deepthi</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={post_data1}>
          Click
        </button>
      </form>
    </div>
      </div>

     
  );
};

export default Leadsform;
