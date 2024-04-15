import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_url1, post_url6 } from "./URL/url";
import "./studentslist.css";
import "./studentdetails.css";
import { useNavigate,Link } from "react-router-dom";

const Customerform = () => {
  const [customerName, setCustomerName] = useState("");
 
  const [address, setAddress] = useState("");
 
 const[date,setDate]=useState("")
 const[state,setState]=useState("")
 const[phoneno,setPhoneNo]=useState("")
const[gstin,setGstin]=useState("")
const [fieldErrors, setFieldErrors] = useState({
    customerName: false,
    address: false,
    date: false,
    state: false,
    phoneno: false,
  });
  let navigate = useNavigate();

 
  const post_data1 = async () => {
    await axios.post(post_url6, {
        customerName,
        address,
        date, 
        state,
        phoneno,
        gstin,
    });
    navigate("/Customerlist");
  };

  return (
    <>
     <div className="Container">
        <h2> CUSTOMER FORM</h2>
        <div className="box">
          <Link className="one" to="/customer">
            <i id="add" className="fa-solid fa-users"></i>
            <h2>Add Customer</h2>
          </Link>
          <Link className="two" to="/customerlist">
            <i id="view" className="fa-solid fa-users"></i>
            <h2>View Customer</h2>
          </Link>
        </div>
     
       
        <div>
          <form>
            <label>Customer Name:</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <br />
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <label>State:</label>
          <select
            name="state"
            onChange={(e) => setState(e.target.value)}
            style={{ display: "inline-block", marginTop: "50px" }}
          >
            <option>Select state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
          </select>
            <br />
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneno}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <br />
            <label>GSTIN:</label>
            <input
              type="text"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
            />
            
          </form>
        </div>

        <button type="submit" onClick={post_data1}>
          Add
        </button>
      </div>
    </>
  );
};
export default Customerform;
