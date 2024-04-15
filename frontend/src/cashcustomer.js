import React, { useEffect, useState } from "react";
import axios from "axios";
import { get_url8, post_url9, delete_url4, get_url1 } from "./URL/url";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./studentslist.css";
import "./studentdetails.css";
import "./read.css";
import Cashlist from "./Cashlist";
import Cashcustomerlist from "./cashcustomerlist";

const Cashcustomer = () => {
  const [data1, setdata1] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState("");
  const [payingAmount, setPayingAmount] = useState("");
  const [remainingBalance, setRemainingBalance] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [ref, setRef] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(get_url8).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);

  const post_data1 = async () => {
    await axios.post(post_url9, {
      selectedStudents,
      payingAmount,
      remainingBalance,
      paymentMethod,
    });
    navigate("/Cashcustomerlist");
  };
  const handlePayingAmountChange = (e) => {
    const enteredPayingAmount = parseFloat(e.target.value) || 0;
  
    // Filter the selected items
    const selectedItems = data1.filter((item) => item.selected);
    const totalRemainingAmount = selectedItems.reduce((acc, item) => acc + item.finalTotal, 0);
  
    const remainingBalance = totalRemainingAmount - enteredPayingAmount;
  
    setPayingAmount(enteredPayingAmount.toString());
    setRemainingBalance(remainingBalance.toString());
  };
  const handleCheckboxChange = (index) => {
    const newData = [...data1];
    newData[index].selected = !newData[index].selected;
    setdata1(newData);
    updateSelectedStudents(newData);
  };

  const updateSelectedStudents = (newData) => {
    const selected = newData.filter((item) => item.selected);
    const selectedNames = selected.map((item) => item.customerName).join(", ");
    const totalRemainingAmount = selected.reduce((acc, item) => acc + item.finalTotal, 0);
  
    setSelectedStudents(selectedNames);
    setPayingAmount("0");

    // Calculate remaining balance based on the entered paying amount
    const enteredPayingAmount = parseFloat(payingAmount) || 0;
    const remainingBalance = totalRemainingAmount - enteredPayingAmount;
  
    setRemainingBalance(remainingBalance.toString());
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCreateButtonClick = () => {
    setIsVisible(true);
  };

  const handleBackButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="Container">
      {!isVisible && (
        <div className="san1">
          <button onClick={handleCreateButtonClick}>Create</button>
        </div>
      )}

      <Cashcustomerlist />

      {isVisible && (
        <div>
          {data1.map((v, index) => (
            <div key={index} className="text">
              <input
                type="checkbox"
                checked={v.selected || false}
                onChange={() => handleCheckboxChange(index)}
              />
              {v.customerName}
              {v.finalTotal}
            </div>
          ))}

          <div className="san1">
            <label htmlFor="selectedStudents">Selected Students:</label>
            <input type="text" id="selectedStudents" value={selectedStudents} readOnly />
          </div>

          <div className="san1">
            <label htmlFor="payingAmount">Paying Amount:</label>
            <input
              type="text"
              id="payingAmount"
              value={payingAmount}
              onChange={handlePayingAmountChange}
            />
          </div>

          <div className="san1">
            <label htmlFor="remainingBalance">Remaining Balance:</label>
            <input
              type="text"
              id="remainingBalance"
              value={remainingBalance}
              readOnly
            />
          </div>

          <div className="san1">
            <label>Payment Method:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={handlePaymentMethodChange}
                />
                Cash
              </label>
            </div>
          </div>
          <br />
          <div className="san1">
            <button onClick={post_data1} type="submit">
              Submit Cash-In
            </button>
            <button onClick={handleBackButtonClick}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cashcustomer;
