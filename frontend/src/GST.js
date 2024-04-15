import React, { useState, useEffect } from "react";
import "./GSTBilling.css";
import { Display } from "./Display";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { get_url6, post_url8 } from "./URL/url";

// Placeholder function for number to words conversion
const calculateTotalInWords = (totalAmount) => {
  // Replace this with your actual implementation or use a library
  return `${totalAmount} (in words)`;
};

const GSTBilling = (props) => {
  const [invoiceNo, setInvoiceNo] = useState(props.invoiceNo);
  const [selectedCustomerNames, setSelectedCustomerNames] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [finalTotal, setFinalTotal] = useState("");

  let navigate = useNavigate();

  const post_data1 = async () => {
    await axios.post(post_url8, {
      customerName,
      finalTotal,
    });
    navigate("/Cashcustomer");
  };

  const incrementInvoiceNo = () => {
    const parts = invoiceNo.split("/");
    if (parts.length === 3) {
      const lastPart = parts[2];
      const newNumber = parseInt(lastPart) + 1;
      const newInvoiceNo =
        parts.slice(0, 2).join("/") + "/" + newNumber.toString();
      setInvoiceNo(newInvoiceNo);
      localStorage.setItem("lastInvoiceNo", newInvoiceNo);
    }
  };

  useEffect(() => {
    props.updateInvoiceNumber(invoiceNo);
  }, [invoiceNo, props.updateInvoiceNumber]);

  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customerInfo = selectedCustomer
    ? customers.find((customer) => customer.customerName === selectedCustomer)
    : null;

  const [submittedData, setSubmittedData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState("");

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

  const [tableRows, setTableRows] = useState([
    { description: "", qty: "", unitPrice: "", totalAmount: 0 },
  ]);

  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [igst, setIgst] = useState(0);

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

  const calculateCGST = () => {
    // ... (existing code)
  };

  const calculateSGST = () => {
    // ... (existing code)
  };

  const calculateIGST = (total, igstRate) => {
    const igstAmount = (total * igstRate) / 100;
    return igstAmount;
  };

  const calculateFinalTotal = () => {
    const total = parseFloat(calculateTotal());
    const cgstAmount = parseFloat(calculateCGST());
    const sgstAmount = parseFloat(calculateSGST());
    const igstAmount = parseFloat(calculateIGST(total, props.igstRate));

    const finalTotal = total + cgstAmount + sgstAmount + igstAmount;
    return finalTotal.toFixed(2);
  };

  useEffect(() => {
    setCgst(calculateCGST());
    setSgst(calculateSGST());
    setIgst(calculateIGST(parseFloat(calculateTotal()), props.igstRate));
  }, [tableRows, props.cgstRate, props.sgstRate, props.igstRate]);

  const handlePrint = () => {
    window.print();
    incrementInvoiceNo();
    post_data1();

    // ... (existing code)
  };

  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);

  useEffect(() => {
    axios.get(get_url6).then((res) => {
      setdata1(res.data);
    });
  }, [ref]);

  const handleCheckboxChange = (customerName) => {
    setSelectedCustomerNames((prevNames) => {
      if (prevNames.includes(customerName)) {
        setCustomerName("");
        return prevNames.filter((name) => name !== customerName);
      } else {
        setCustomerName(customerName);
        return [...prevNames, customerName];
      }
    });
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
          <Display
            customers={customers}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            handleInputChange={handleInputChange}
          />
          <div>
            {data1.map((v, index) => (
              <label key={v._id}>
                <input
                  type="checkbox"
                  value={v.customerName}
                  checked={selectedCustomerNames.includes(v.customerName)}
                  onChange={() => handleCheckboxChange(v.customerName)}
                />
                {v.customerName}
              </label>
            ))}
          </div>
        </div>

        <div className="bill6">
        <h1>ESTIMATED BILL</h1>
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
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
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
              {customerInfo?.state === "Tamilnadu" ? (
                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>CGST {props.cgstRate}%</td>
                    <td>{cgst}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>SGST {props.sgstRate}%</td>
                    <td>{sgst}</td>
                    <td></td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>IGST {props.igstRate}%</td>
                    <td>{igst}</td>
                    <td></td>
                  </tr>
                </>
              )}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Final Total</td>
                <td>
                  {calculateFinalTotal()}
                  <input
                    type="number"
                    value={finalTotal}
                    onChange={(e) => setFinalTotal(e.target.value)}
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bill8">
          <p>TOTAL (In Words) : {calculateTotalInWords(calculateFinalTotal())} only</p>
        </div>

        <div className="bill9">
          <button onClick={handlePrint}>Print</button>
        </div>
        <div className="bill10">
          <h3>Bank Account Details</h3>
          <p>
            <strong>Bank </strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>Federal Bank</span>
          </p>
          <p>
            <strong>Account No </strong>&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>19829200003697</span>{" "}
          </p>
          <p>
            <strong>IFSC Code </strong>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>FDRL0001982 </span>
          </p>
          <p>
            <strong>Branch </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>Papanaickenpalayam.</span>
          </p>
        </div>
        <div className="bill7">
          <h4>THANK YOU FOR YOUR BUSINESS!</h4>
        </div>
      </div>

      <style>{`
        @media print {
          .add-item, .sidebar { display: none; }
          .billing { max-width: 100%; height: auto; }
          .bill2, .logo-box { display: none; }
          .bill4 { text-align: center;  margin-top: -200px; margin-left: 350px;}
          .logo { max-width: 100%; height: auto; }
          .bill7 { margin-left: 60px; margin-top: 300px; }
          .bill9 { display: none; }
        }
      `}</style>
    </>
  );
};

export default GSTBilling;
