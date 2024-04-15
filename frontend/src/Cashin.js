import React, { useEffect, useState } from "react";
import axios from "axios";
import { get_url1, post_url5, delete_url4, get_url5 } from "./URL/url";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./studentslist.css";
import "./studentdetails.css";
import "./read.css";
import Cashlist from "./Cashlist";

const Cashin = () => {
  const [data1, setdata1] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [payingAmount, setPayingAmount] = useState("");
  const [remainingAmount, setRemainingAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to "Cash"
  const [ref, setRef] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // New state variable
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(get_url1).then((res) => {
      console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);

  const post_data1 = async () => {
    await axios.post(post_url5, {
      selectedStudents,
   
      payingAmount,
      remainingAmount,
      paymentMethod,
    });
    navigate("/Cashlist");
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
    const totalPaidAmount = selected.reduce((acc, item) => acc + item.paidAmount, 0);
    const totalRemainingAmount = selected.reduce((acc, item) => acc + item.remainingAmount, 0);

    setSelectedStudents(selectedNames);
   
    setPayingAmount("0"); // Reset paying amount to 0
    setRemainingAmount(totalRemainingAmount.toString());
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

  const handlePayingAmountChange = (e) => {
    const enteredPayingAmount = e.target.value;
    const remainingBalance = 30000 - parseInt(enteredPayingAmount);
    setPayingAmount(enteredPayingAmount);
    setRemainingAmount(remainingBalance.toString());
  };

  return (
    <div className="Container">
     

      {/* Button to show Cashin */}
      {!isVisible && (
        <div className="san1">
          <button onClick={handleCreateButtonClick}>Create</button>
        </div>
      )}
 <Cashlist />
      {/* Cashin Section */}
      {isVisible && (
        <div>
          {data1.map((v, index) => (
            <div key={index} className="text">
              <input
                type="checkbox"
                checked={v.selected || false}
                onChange={() => handleCheckboxChange(index)}
              />
              {v.firstname}
              {v.paidAmount}
              {v.remainingAmount}
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
            <label htmlFor="remainingAmount">Remaining Balance:</label>
            <input
              type="text"
              id="remainingAmount"
              value={remainingAmount}
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
              {/* Add more radio buttons for other payment methods if needed */}
            </div>
          </div>
          <br />
          <div className="san1">
            <button onClick={post_data1} type="submit">
              Submit Cash-In
            </button>

            {/* Back button */}
            <button onClick={handleBackButtonClick}>Back</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cashin;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { get_url1, post_url5, delete_url4, get_url5 } from "./URL/url";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./studentslist.css";
// import "./studentdetails.css";
// import "./read.css";
// import Cashlist from "./Cashlist";

// const Cashin = () => {
//   const [data1, setdata1] = useState([]);
//   const [selectedStudents, setSelectedStudents] = useState("");
//   const [payingAmount, setPayingAmount] = useState("");
//   const [remainingAmount, setRemainingAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to "Cash"
//   const [ref, setRef] = useState(true);
//   const [isVisible, setIsVisible] = useState(false); // New state variable
//   const [searchInput, setSearchInput] = useState(""); // Added state for search input
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(get_url1).then((res) => {
//       console.log(res.data);
//       setdata1(res.data);
//     });
//   }, [ref]);

//   const post_data1 = async () => {
//     await axios.post(post_url5, {
//       selectedStudents,
//       payingAmount,
//       remainingAmount,
//       paymentMethod,
//     });
//     navigate("/Cashlist");
//   };

//   const handleCheckboxChange = (index) => {
//     const newData = [...data1];
//     newData[index].selected = !newData[index].selected;
//     setdata1(newData);
//     updateSelectedStudents(newData);
//   };

//   const updateSelectedStudents = (newData) => {
//     const selected = newData.filter((item) => item.selected);
//     const selectedNames = selected.map((item) => item.firstname).join(", ");
//     const totalPaidAmount = selected.reduce((acc, item) => acc + item.paidAmount, 0);
//     const totalRemainingAmount = selected.reduce((acc, item) => acc + item.remainingAmount, 0);

//     setSelectedStudents(selectedNames);
//     setPayingAmount("0");
//     setRemainingAmount(totalRemainingAmount.toString());
//   };

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleCreateButtonClick = () => {
//     setIsVisible(true);
//   };

//   const handleBackButtonClick = () => {
//     setIsVisible(false);
//   };

//   const handlePayingAmountChange = (e) => {
//     const enteredPayingAmount = e.target.value;

//     if (enteredPayingAmount === "" || /^\d+$/.test(enteredPayingAmount)) {
//       const numericValue = enteredPayingAmount === "" ? 0 : parseInt(enteredPayingAmount, 10);
//       if (numericValue >= 0 && numericValue <= 30000) {
//         let remainingBalance = 30000 - numericValue;
//         setPayingAmount(enteredPayingAmount);
//         setRemainingAmount(remainingBalance.toString());
//       }
//     }
//   };

//   // Filter data based on vendor name
//   const filteredData = data1.filter((item) =>
//     item.vendorName && item.vendorName.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div className="Container">
//       {!isVisible && (
//         <div className="san1">
//           <label htmlFor="vendorSearch">Search Vendor Name:</label>
//           <input
//             type="text"
//             id="vendorSearch"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <button onClick={handleCreateButtonClick}>Create</button>
//         </div>
//       )}

//       <Cashlist />

//       {isVisible && (
//         <div>
//           {filteredData.map((v, index) => (
//             <div key={index} className="text">
//               <input
//                 type="checkbox"
//                 checked={v.selected || false}
//                 onChange={() => handleCheckboxChange(index)}
//               />
//               <div>
//                 <span>{v.firstname}</span>
//               </div>
//               <div>
//                 <span style={{ marginLeft: "200px", marginTop: "-27px", position: "absolute" }}>
//                   Paid Amount: {v.paidAmount}
//                 </span>
//               </div>
//               <div>
//                 <span style={{ marginLeft: "400px", marginTop: "-27px", position: "absolute" }}>
//                   Remaining Amount: {v.remainingAmount}
//                 </span>
//               </div>
//             </div>
//           ))}

//           <div className="san1">
//             <label htmlFor="selectedStudents">Selected Students:</label>
//             <input type="text" id="selectedStudents" value={selectedStudents} readOnly />
//           </div>

//           <div className="san1">
//             <label htmlFor="payingAmount">Paying Amount:</label>
//             <input
//               type="text"
//               id="payingAmount"
//               value={payingAmount}
//               onChange={handlePayingAmountChange}
//             />
//           </div>

//           <div className="san1">
//             <label htmlFor="remainingAmount">Remaining Balance:</label>
//             <input type="text" id="remainingAmount" value={remainingAmount} readOnly />
//           </div>

//           <div className="san1">
//             <label>Payment Method:</label>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="Cash"
//                   checked={paymentMethod === "Cash"}
//                   onChange={handlePaymentMethodChange}
//                 />
//                 Cash
//               </label>
//               {/* Add more radio buttons for other payment methods if needed */}
//             </div>
//           </div>
//           <br />
//           <div className="san1">
//             <button onClick={post_data1} type="submit">
//               Submit Cash-In
//             </button>

//             <button onClick={handleBackButtonClick}>Back</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cashin;



