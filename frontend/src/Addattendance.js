import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_url1,post_url4 } from "./URL/url";
// import "./studentslist.css";
// import "./studentdetails.css";
import { useNavigate,Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Attendanceform = () => {
  let navigate = useNavigate();

  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  const[firstname,setFirstName]=useState("");
  const [selectedStudents, setSelectedStudents] = useState("");
  const [status, setStatus] = useState("Present");
  const [inDate, setInDate] = useState("");
  const [inTime, setInTime] = useState("");
  const [outDate, setOutDate] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    axios.get(get_url1).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);
  const post_data1 = async () => {
    await axios.post(post_url4, {

      selectedStudents,
      status,
      inDate,
      inTime,
      outDate,
      comments

      
    });
    navigate("/Attendancelist");
  };
  const handleCheckboxChange = (index) => {
    const newData = [...data1];
    newData[index].selected = !newData[index].selected;
    setdata1(newData);
    updateSelectedStudents(newData);
  };

  const updateSelectedStudents = (newData) => {
    const selected = newData.filter((item) => item.selected);
    const selectedNames = selected.map((item) => item.firstname).join(", ");
    setSelectedStudents(selectedNames);
  };

  return (
    <>
      <h1>Attendance Form</h1>
      <div className="box bg-light">
          <Link style={{textDecoration:"none"}} className="two" to="/Addattendanceform">
            <i id="add" className="fa-solid fa-users"></i>
            <h2>Attendance Form</h2>
          </Link>
          <Link style={{textDecoration:"none"}} className="two" to="/Attendancelist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>Attendance List</h2>
          </Link>
        </div>
      <div>
        {data1.map((v, index) => (
          <div key={index} className="text">
            <input
              type="checkbox"
              checked={v.selected || false}
              onChange={() => handleCheckboxChange(index)}
            />
            {v.firstname}
          </div>
        ))}
      </div>

      <div className="san1">
        <label htmlFor="selected students">Selected Students:</label>
        <input
          type="text"
          id="selected students"
          value={selectedStudents}
          readOnly
        />
      </div>

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="Present">Present</option>
        <option value="Absent with permission">Absent with permission</option>
      </select>

      <div className="san1">
        <label htmlFor="inDate">In Date:</label>
        <input
          type="date"
          id="inDate"
          value={inDate}
          onChange={(e) => setInDate(e.target.value)}
        />
      </div>
      <br />
      <div className="san1">
        <label htmlFor="inTime">In Time:</label>
        <input
          type="time"
          id="inTime"
          value={inTime}
          onChange={(e) => setInTime(e.target.value)}
        />
      </div>
      <br />
      <div className="san1">
        <label htmlFor="outDate">Out Date:</label>
        <input
          type="date"
          id="outDate"
          value={outDate}
          onChange={(e) => setOutDate(e.target.value)}
        />
        <br />
      </div>
      <div className="san1">
        <label htmlFor="comments">Comments:</label>
        <input
          type="text"
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <br />
      <div className="san1">
        <button onClick={post_data1} type="submit">Submit</button>
      </div>
    </>
  );
};

export default Attendanceform;
