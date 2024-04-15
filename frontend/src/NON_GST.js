import React, { useState, useEffect } from "react";
import logoimg from "../src/components/kitakat Logo.png"
// import { Display } from "./Display";
const NonGST = (props) => {
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const [currentDate, setCurrentDate] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(props.invoiceNo);

  const customerInfo = selectedCustomer
    ? customers.find((customer) => customer.customerName === selectedCustomer)
    : null;
  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setCurrentDate(getCurrentDate());
  }, []);

  // const incrementInvoiceNo = () => {
  //   const parts = invoiceNo.split("/");
  //   if (parts.length === 3) {
  //     const lastPart = parts[2];
  //     const newNumber = parseInt(lastPart) + 1;
  //     const newInvoiceNo =
  //       parts.slice(0, 2).join("/") + "/" + newNumber.toString();
  //     setInvoiceNo(newInvoiceNo);
  //     localStorage.setItem("lastInvoiceNo", newInvoiceNo);
  //   }
  // };
  const [submittedData, setSubmittedData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [showCustomerList, setShowCustomerList] = useState(false);

  const [tableRows, setTableRows] = useState([
    { qty: "", unitPrice: "", totalAmount: 0 },
  ]);

  const handleAddRow = () => {
    const nextSno = tableRows.length + 1;

    setTableRows([
      ...tableRows,
      { sNo: nextSno, description: "", qty: "", unitPrice: "", totalAmount: 0 },
    ]);
  };
  const handleDeleteRow = (index) => {
    const updatedRows = [...tableRows];
    updatedRows.splice(index, 1);
    setTableRows(updatedRows);
  };

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedRows = [...tableRows];
    updatedRows[index][field] = value;

    if (field === "qty" || field === "unitPrice") {
      const qty = parseFloat(updatedRows[index].qty) || 0;
      const unitPrice = parseFloat(updatedRows[index].unitPrice) || 0;
      updatedRows[index].totalAmount = qty * unitPrice;
    }

    setTableRows(updatedRows);
  };

  const calculateTotal = () => {
    return tableRows
      .reduce((total, row) => total + row.totalAmount, 0)
      .toFixed(2);
  };

  function convertNumberToWords(number) {
    const ones = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (number < 20) {
      return ones[number];
    }

    if (number < 100) {
      const remainder = number % 10;
      return (
        tens[Math.floor(number / 10)] +
        (remainder > 0 ? " " + ones[remainder] : "")
      );
    }

    if (number < 1000) {
      const remainder = number % 100;
      return (
        ones[Math.floor(number / 100)] +
        " Hundred" +
        (remainder > 0 ? " and " + convertNumberToWords(remainder) : "")
      );
    }

    if (number < 1000000) {
      const thousands = Math.floor(number / 1000);
      const remainder = number % 1000;
      return (
        convertNumberToWords(thousands) +
        " Thousand" +
        (remainder > 0 ? " " + convertNumberToWords(remainder) : "")
      );
    }

    return "Number too large to convert";
  }

  const calculateTotalInWords = () => {
    const totalAmount = calculateTotal();
    return convertNumberToWords(parseFloat(totalAmount));
  };
  // const handlePrint = () => {
  //   window.print();
  //  // After printing, update the state
  // const totalAmount = calculateTotal();
  // setSelectedCustomer(selectedCustomer);
  // setShowCustomerList(true);

  // // Retrieve the existing list from localStorage
  // const existingList = JSON.parse(localStorage.getItem("selectedCustomers")) || [];

  // // Add the new entry to the list
  // const newList = [...existingList, { selectedCustomer, totalAmount }];

  // // Store the updated list in localStorage
  // localStorage.setItem("selectedCustomers", JSON.stringify(newList));

  // };

  const handlePrint = () => {
    window.print();
    // incrementInvoiceNo();

    // After printing, store selected customer and additional customer information in an array
    const entry = {
      selectedCustomer,
      address: customerInfo.address,
      state: customerInfo.state,
      phoneno: customerInfo.phoneno,
      CurrentBalance: customerInfo.CurrentBalance,
      gstin: customerInfo.gstin,
      finalAmount: calculateTotal(),
      balanceAmount: customerInfo.CurrentBalance - calculateTotal(), // Calculate and store balance amount
    };

    // Retrieve existing entries from localStorage
    const existingEntries =
      JSON.parse(localStorage.getItem("summaryEntries")) || [];

    // Add the new entry
    const updatedEntries = [...existingEntries, entry];

    // Store the updated entries in localStorage
    localStorage.setItem("summaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      <div className="billing">
        <div className="bill1">
          
          <h3>KITKAT SOFTWARE TECHNOLOGIES</h3>
        </div>
        <div className="bill2">
          <h4>
            No: 70/77 , 1st Floor, Krishna complex, PN Palayam <br />
            Coimbatore-641037 <br />
            Phone No : 7010816299 , 04224957272.
          </h4>
        </div>
        <br />
        <div className="bill3">
          <h3>INVOICE TO:</h3>

          {/* <Display
            customers={customers}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            handleInputChange={handleInputChange}
          /> */}
        </div>
        {submittedData && !isFormVisible && (
          <div className="bill10">
            <p> {submittedData.invoiceName}</p>
            <p> {submittedData.invoiceDoorno}</p>
            <p> {submittedData.invoiceStreet}</p>
            <p> {submittedData.invoiceDistrict}</p>
          </div>
        )}
        <div className="bill4">
          <img src={logoimg} alt="logo" />
        </div>
        <div className="bill5">
          <input
            className="inputbill"
            type="date"
            id="date"
            name="date"
            value={currentDate}
          />
        </div>
        <div className="bill6">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Description</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      name={`description${index}`}
                      value={row.description}
                      onChange={(event) =>
                        handleInputChange(event, index, "description")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name={`qty${index}`}
                      value={row.qty}
                      onChange={(event) =>
                        handleInputChange(event, index, "qty")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name={`unitPrice${index}`}
                      value={row.unitPrice}
                      onChange={(event) =>
                        handleInputChange(event, index, "unitPrice")
                      }
                    />
                  </td>
                  <td>{row.totalAmount.toFixed(2)}</td>
                  <td>
                    {index === tableRows.length - 1 ? (
                      <button className="btn" onClick={handleAddRow}>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => handleDeleteRow(index)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>{calculateTotal()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bill8">
          <p>TOTAL (In Words) : {calculateTotalInWords()} only</p>
        </div>
        <div className="bill10">
          <h3>Bank Account Details</h3>
          <p>
            <strong>Bank </strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            :&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>Federal Bank</span>
          </p>
          <p>
            <strong>Account No </strong>&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>
              19829200003697
            </span>{" "}
          </p>
          <p>
            <strong>IFSC Code </strong>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>FDRL0001982 </span>
          </p>
          <p>
            <strong>Branch </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            :&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>
              Papanaickenpalayam.
            </span>
          </p>
        </div>
        <div className="bill7">
          <h4>THANK YOU FOR YOU BUSINESS!</h4>
        </div>
        <div className="bill9">
          <button onClick={handlePrint}>Print</button>
        </div>
        <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br>
      </div>

      <style>{`
        @media print {
          .add-item, .sidebar { display: none; } /* Hide the "Add Item" section */
          /* Hide other sections if needed */
          .billing{max-width: 100%; height: auto;}
           .bill2, .logo-box { display: none; }
          .bill4 { text-align: center;  margin-top: -200px; margin-left: 350px;} /* Center the logo */
          .logo { max-width: 100%; height: auto; } /* Adjust logo size and add margins */
            .bill7{margin-left:60px; margin-top:300px;}
            .bill9{display:none;}
        }
      `}</style>
    </>
  );
};
export { NonGST };
