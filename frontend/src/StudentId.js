// StudentId.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentId = () => {
  const [studentId, setStudentId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/studentsdetail/${studentId}`);
    localStorage.setItem("studentId",studentId);
    
  };
  useEffect(()=>{
    let increment= localStorage.getItem("studentId")
    let split = increment.split("STU")
    // localStorage.setItem("studentId",  `STU${Number(split[1])+1}`)
    setStudentId(`STU${Number(split[1])+1}`)


  },[])



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student ID:
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentId;
