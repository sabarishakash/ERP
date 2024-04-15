import React, { useState, useEffect } from "react";
import axios from "axios";
import { delete_url5, get_url5 } from "./URL/url";
import { Link } from "react-router-dom";
import "./read.css";

const Cashlist = () => {
  const [data1, setdata1] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [ref, setref] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(get_url5).then((res) => {
      setdata1(res.data);
      setFilteredData(res.data);
    });
  }, [ref]);

  useEffect(() => {
    // Filter the data based on the search term
    const filteredResults = data1.filter((v) =>
      v.selectedStudents.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm, data1]);

  const del = (v) => {
    axios.delete(`${delete_url5}/${v._id}`).then((res) => {
      setref(!ref);
    });
  };

  return (
    <div className="container-lg" style={{ border: "1px solid white", padding: "20px" }}>
      <div className="Container rounded shadow-lg p-4">
        <h1>CashIn</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Vendor Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table className="table table-bordered mx-auto">
            <thead>
              <tr>
                <th className="bg-primary">S.No</th>
                <th className="bg-primary">Vendor Name</th>
                <th className="bg-primary">Receipt Type</th>
                <th className="bg-primary">Paying Amount</th>
                <th className="bg-primary">Remaining Amount</th>
                <th className="bg-primary">Payment Method</th>
                <th className="bg-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((v, index) => (
                <tr key={v._id}>
                  <td className="table-light">{index + 1}</td>
                  <td className="table-light">{v.selectedStudents}</td>
                  <td className="table-light">Cash-In</td>
                  <td className="table-light">{v.payingAmount}</td>
                  <td className="table-light">{v.remainingAmount}</td>
                  <td className="table-light">{v.paymentMethod}</td>
                  <td>
                    <div className="click">
                      <button>
                        <Link to={`/update5/${v._id}`}>Pay Now</Link>
                      </button>
                      <button>
                        {" "}
                        <Link to={`/view5/${v._id}`}> view</Link>
                      </button>
                      <button onClick={() => del(v)}> delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cashlist;
