import React, { useState } from "react";
import { get_url } from "./URL/url";
import { useEffect } from "react";
import axios from "axios";
import App from "./StudentId";
import "./read.css";
import { useNavigate } from "react-router-dom";

function Read() {
  const [data, setdata] = useState([]);
  let navigate = useNavigate();
  const backpage = () => {
    navigate("/");
  };
  useEffect(() => {
    axios.get(get_url).then((res) => {
      //console.log(res.data);
      setdata(res.data);
    });
  }, []);

  return (
    <>
      {/* <div>
        {data.map((v) => {
          if (v.amount > 30000) {
            return (
              <div key={v._id} id="data">
                {v.name} {v.amount}
              </div>
            );
          }
        })}
      </div>
      <button onClick={backpage}>back</button> */}
      {/* <details>
        <summary>dropdowns</summary>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </details> */}
      <h1> Students Fees Details</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, index) => (
            <tr key={v._id}>
              <td>{index + 1}</td>
              <td>{v.name}</td>
              <td>RS: {v.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Pending Fees detailss</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, index) => {
            if (v.amount <= 30000) {
              return (
                <tr key={v._id}>
                  <td>{index - 1}</td>
                  <td>{v.name}</td>
                  <td> RS:{v.amount}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <button onClick={backpage}>back</button>
    </>
  );
}
export default Read;
