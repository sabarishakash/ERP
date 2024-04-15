import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url9, update_url9 } from "./URL/url";
import "./studentdetails.css";

function Cashcustomeredit() {
  const { id } = useParams();
  const history = useNavigate();

  const [cashIn, setCashIn] = useState({
    selectedStudents: "",
    payingAmount: "",
    remainingBalance: "",
    paymentMethod: "",
  });

  const [initialRemainingBalance, setInitialRemainingBalance] = useState(0);
  const [enteredPayingAmount, setEnteredPayingAmount] = useState("");

  useEffect(() => {
    axios
      .get(`${get_url9}/${id}`)
      .then((res) => {
        setCashIn(res.data);
        setInitialRemainingBalance(res.data.remainingBalance); // Store initial remaining balance
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = () => {
    // Calculate remaining amount based on the entered paying amount
    const newRemainingAmount = initialRemainingBalance - enteredPayingAmount;

    // Update the state variables
    setCashIn({
      ...cashIn,
      payingAmount: enteredPayingAmount,
      remainingBalance: newRemainingAmount,
    });

    // Send the update to the server
    axios
      .put(`${update_url9}/${id}`, cashIn)
      .then(() => {
        // Do not navigate automatically
        // history("/Cashlist");
      })
      .catch((err) => {
        console.error(err);
      });
    history("/Cashcustomer");
  };

  const handlePayingAmountChange = (e) => {
    // Calculate remaining amount based on the entered paying amount
    const newRemainingAmount = initialRemainingBalance - e.target.value;

    // Update the state variables
    setCashIn({
      ...cashIn,
      payingAmount: e.target.value,
      remainingBalance: newRemainingAmount,
    });
    setEnteredPayingAmount(e.target.value);
  };

  return (
    <div className="Container">
      <div>
        <h2>Update CashIn</h2>
        <form>
          <div>
            <label htmlFor="payingAmount">Paying Amount:</label>
            <input
              type="text"
              id="payingAmount"
              value={cashIn.payingAmount}
              onChange={handlePayingAmountChange}
            />
          </div>
          <div>
            <label htmlFor="remainingAmount">Remaining Amount:</label>
            <input
              type="text"
              id="remainingAmount"
              value={cashIn.remainingBalance}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="remainingAmount">Payment Method:</label>
            <input
              type="text"
              id="remainingAmount"
              value={cashIn.paymentMethod}
              readOnly
            />
          </div>

          <button type="button" onClick={handleUpdate}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cashcustomeredit;
