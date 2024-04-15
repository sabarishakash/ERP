import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url10, update_url10 } from "./URL/url";
import("./studentdetails.css");

function StudentIdedit() {
  const { id } = useParams();

  const history = useNavigate();
  const [student, setStudent] = useState({
    studentId: "",
   
  });
  useEffect(() => {
    axios
      .get(`${get_url10}/${id}`)
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
      .put(`${update_url10}/${id}`, student)
      .then(() => {
        
        
      })
      .catch((err) => {
        console.error(err);
      });
    
  };
 
  return (
    <div className="Container">
      <div>
        <h2>Update StudentId</h2>
        <form>
          <div>
            <label>StudentId:</label>
            <input
              type="text"
              name="firstname"
              value={student.studentId}
              onChange={(e) => {
                setStudent({ ...student, studentId: e.target.value });
              }}
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

export default StudentIdedit;
