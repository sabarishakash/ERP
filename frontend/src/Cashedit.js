import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url5, update_url5 } from "./URL/url";
import "./studentdetails.css";

function Cashedit() {
  const { id } = useParams();
  const history = useNavigate();

  const [cashIn, setCashIn] = useState({
    selectedStudents: "",
    payingAmount: "",
    remainingAmount: "",
    paymentMethod: "",
  });

  const [enteredPayingAmount, setEnteredPayingAmount] = useState("");

  useEffect(() => {
    axios
      .get(`${get_url5}/${id}`)
      .then((res) => {
        setCashIn(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = () => {
    // Calculate remaining amount and update the state
    const newRemainingAmount = 30000 - enteredPayingAmount;
    setCashIn({
      ...cashIn,
      payingAmount: enteredPayingAmount,
      remainingAmount: newRemainingAmount,
    });

    // Send the update to the server
    axios
      .put(`${update_url5}/${id}`, cashIn)
      .then(() => {
        history("/Cashlist");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePayingAmountChange = (e) => {
    const enteredValue = e.target.value;
  
    if (enteredValue === "") {
      // If the entered value is empty, set the paying amount to an empty string
      setCashIn({
        ...cashIn,
        payingAmount: "",
        remainingAmount: 30000,
      });
      setEnteredPayingAmount("");
    } else {
      // Remove non-numeric characters and leading zeros
      const sanitizedValue = enteredValue.replace(/[^0-9]/g, '').replace(/^0+/, '');
  
      // Ensure the value is within the allowed range
      const parsedValue = parseInt(sanitizedValue, 10);
      if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 30000) {
        // Update the state variables
        const newRemainingAmount = 30000 - parsedValue;
        setCashIn({
          ...cashIn,
          payingAmount: parsedValue,
          remainingAmount: newRemainingAmount,
        });
        setEnteredPayingAmount(parsedValue.toString());
      }
    }
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
              value={enteredPayingAmount}
              onChange={handlePayingAmountChange}
            />
          </div>
          <div>
            <label htmlFor="remainingAmount">Remaining Amount:</label>
            <input
              type="text"
              id="remainingAmount"
              value={cashIn.remainingAmount}
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

export default Cashedit;