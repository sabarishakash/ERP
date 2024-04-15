import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url6, update_url6 } from "./URL/url";
import("./studentdetails.css");

function Customeredit() {
  const { id } = useParams();

  const history = useNavigate();
  const [customer, setCustomer] = useState({
    customerName:"",
        address:"",
        date:"", 
        state:"",
        phoneno:"",
        gstin:"",
  });
  useEffect(() => {
    axios
      .get(`${get_url6}/${id}`)
      .then((res) => {
        setCustomer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log("Student ID:", id);

  const handleUpdate = () => {
    axios
      .put(`${update_url6}/${id}`, customer)
      .then(() => {
        history("/Customerlist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/Customerlist");
  };
  
  return (
    <div className="Container">
      <div>
        <h2>Update Customer</h2>
        <form>
          <div>
            <label>Customer Name:</label>
            <input
              type="text"
              name="firstname"
              value={customer.customerName}
              onChange={(e) => {
                setCustomer({ ...customer, customerName: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="lastname"
              value={customer.address}
              onChange={(e) => {
                setCustomer({ ...customer, address: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="fathername">Date:</label>
            <input
              type="text"
              id="fathername"
              value={customer.date}
              onChange={(e) =>
                setCustomer({ ...customer, date: e.target.value })
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
            <label htmlFor="email">State:</label>
            <input
              type="email"
              id="email"
              value={customer.state}
              onChange={(e) =>
                setCustomer({ ...customer, state: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Phone No:</label>
            <input
              type="text"
              id="address"
              value={customer.phoneno}
              onChange={(e) =>
                setCustomer({ ...customer, phoneno: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="dob">GSTIN:</label>
            <input
              type="date"
              id="dob"
              value={customer.gstin}
              onChange={(e) => setCustomer({ ...customer, gstin: e.target.value })}
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

export default Customeredit;
