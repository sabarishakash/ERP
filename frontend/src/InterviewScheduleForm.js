import axios from "axios";
import React, { useState,useEffect } from "react";
import { post_url2,get_url10 } from "./URL/url";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./interviewlist.css";

const InterviewScheduleForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [interviewStatus, setInterviewStatus] = useState("");
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);
  useEffect(() => {
    axios.get(get_url10).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  let navigate = useNavigate();

  const post_data1 = async () => {
    await axios.post(post_url2, {
      name,
      mobile,
      email,
      interviewStatus,
      address,
    });
    navigate("/interviewlist");
  };

  return (
    <>
      <div className="left container-sm mt-4 border rounded p-4 shadow">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-5">Interview Form</h1>
            <form>
              <div className="mb-3 row align-items-center">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginLeft: "50px" }}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="mobile"
                  className="col-sm-2 col-form-label"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Mobile Number:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    style={{ marginLeft: "50px" }}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="address" className="col-sm-2 col-form-label">
                  Address:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ marginLeft: "50px" }}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginLeft: "50px" }}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="interviewStatus"
                  className="col-sm-2 col-form-label"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Interview Status:
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-select status800"
                    id="interviewStatus"
                    value={interviewStatus}
                    onChange={(e) => setInterviewStatus(e.target.value)}
                    style={{ width: "330px" }} // Adjust the width as needed
                    required
                  >
                    <option value="">Select Interview Status</option>
                    <option value="Attended">Attended</option>
                    <option value="Not Attended">Not Attended</option>
                    <option value="Completed">Completed</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={post_data1}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewScheduleForm;
