import React, { useState } from "react";
import logoimg from "./kitakat Logo.png";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetailsSubMenu, setShowDetailsSubMenu] = useState(false);
  const [showAttendanceSubMenu, setShowAttendanceSubMenu] = useState(false);
  const [showGstSubMenu, setShowGstSubMenu] = useState(false);
  const [showReceiptSubMenu, setShowReceiptSubMenu] = useState(false);
  const [showProductListSubMenu, setShowProductListSubMenu] = useState(false); // Add this useState
  const [showLeadsSubMenu, setShowLeadsSubMenu] = useState(false); // Add this useState
  const [showCustomerSubMenu, setShowCustomerSubMenu] = useState(false); // Add this useState
  const [showInterviewSubMenu, setShowInterviewSubMenu] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowDetailsSubMenu(false);
      setShowAttendanceSubMenu(false);
      setShowGstSubMenu(false);
      setShowLeadsSubMenu(false);
      setShowCustomerSubMenu(false);
    }
  };

  const toggleDetailsSubMenu = () => {
    setShowDetailsSubMenu(!showDetailsSubMenu);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowLeadsSubMenu(false);
    setShowCustomerSubMenu(false);
  };

  const toggleAttendanceSubMenu = () => {
    setShowAttendanceSubMenu(!showAttendanceSubMenu);
    setShowDetailsSubMenu(false);
    setShowGstSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowLeadsSubMenu(false);
    setShowCustomerSubMenu(false);
  };

  const toggleGstSubMenu = () => {
    setShowGstSubMenu(!showGstSubMenu);
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowLeadsSubMenu(false);
    setShowCustomerSubMenu(false);
  };
  const toggleReceiptSubMenu = () => {
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(!showReceiptSubMenu);
    setShowLeadsSubMenu(false);
    setShowCustomerSubMenu(false);
  };
  const toggleProductListSubMenu = () => {
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowProductListSubMenu(!showProductListSubMenu);
    setShowLeadsSubMenu(false);
    setShowCustomerSubMenu(false);
  };
  const toggleLeadsSubMenu = () => {
    setShowLeadsSubMenu(!showLeadsSubMenu);
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowProductListSubMenu(false);
    setShowCustomerSubMenu(false);
  };
  const toggleCustomerSubMenu = () => {
    setShowCustomerSubMenu(!showCustomerSubMenu);
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowProductListSubMenu(false);
  };
  const toggleInterviewSubMenu = () => {
    setShowLeadsSubMenu(false);
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowProductListSubMenu(false);
    setShowInterviewSubMenu(!showInterviewSubMenu);
  };
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/EmployeeDetails",
      name: "Student Info",
      icon: <FaUserAlt />,
      subItems: [
        {
          path: "/studentdetail",
          name: "Add Student",
        },
        {
          path: "/studentlist",
          name: "View Student",
        },
        {
          path: "/Employeeform",
          name: "Add Employee",
        },
        {
          path: "/Employeelist",
          name: "View Employee",
        },
      ],
    },
    {
      path: "/Employee",
      name: "Attendance",
      icon: <FaRegChartBar />,
      subItems: [
        {
          path: "/Addattendanceform",
          name: "Add Attendance",
        },
        {
          path: "/Attendancelist",
          name: "View Attendance",
        },
      ],
    },
    {
      path: "/Employee",
      name: "Receipt",
      icon: <FaCommentAlt />,
      subItems: [
        {
          path: "/Cashin",
          name: "CashIn",
        },
        {
          path: "/Cashcustomer",
          name: "Cash Customer"
        }
        // {
        //   path: "/Cashlist",
        //   name: "Cashlist",
        // },
      ],
    },
    {
      path: "/Customer",
      name: "Customer",
      icon: <FaRegChartBar />,
      subItems: [
        {
          path: "/Customerform",
          name: "Customer Form",
        },
        {
          path: "/Customerlist",
          name: "Customer List",
        },
      ],
    },
    {
      name: "Billing",
      icon: <FaShoppingBag />,
      subItems: [
        // {
        //   path: "/NonGSTBillSummary",
        //   name: "NonGSTBillSummary Customer BillSummary",
        // },
        // {
        //   path: "/GSTBillSummary",
        //   name: "GST Customer BillSummary",
        // },
        {
          path: "/GST",
          name: "GST",
        },
        // {
        //   path: "/GSTlist",
        //   name: "GSTlist",
        // },
        {
          path: "/NON-GST",
          name: "Non-GST",
        },
        // {
        //   path: "/summary",
        //   name: "Balance History",
        // },
      ],
    },
    {
      name: "Interview",
      icon: <FaThList />,
      subItems: [
        {
          path: "/interviewscheduleform",
          name: "Interview Schedule",
        },
        {
          path: "/interviewlist",
          name: "Interview List",
        },
      ],
    },
    {
      path: "/Leads",
      name: "Leads",
      icon: <FaThList />,
      subItems: [
        {
          path: "/Leadsform",
          name: "Add Leads",
        },
        {
          path: "/Leadslist",
          name: "Leads List",
        },
        {
          path: "/Report",
          name: "Report",
        },
        {
          path: "/Excel List",
          name: "Excel List",
        },
      ],
    },

    {
      name: "Master",
      icon: <FaThList />,
      subItems: [
        // {
        //   path: "/cash",
        //   name: "Cash",
        // },
        {
          path: "/cusreport",
          name: "gstreport",
        },
        {
          path: "/stureport",
          name: "stureport",
        },
        {
          path: "/finalreport",
          name: "reports",
        },
        {
          path: "/Invoiceno",
          name: "Invoice No",
        },
        {
          path: "/StudentId",
          name: "StuID",
        },
        // {
        //   path: "/StudentIdlist",
        //   name: "StuID",
        // },
      ],
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "270px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="logoimg"
          >
            <img src={logoimg} alt="logo" />
          </div>
          <div style={{ marginLeft: isOpen ? "20px" : "7px" }} className="bars">
            <FaBars className="baricon" onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div
                className="link"
                onClick={
                  item.name === "Student Info"
                    ? toggleDetailsSubMenu
                    : item.name === "Attendance"
                    ? toggleAttendanceSubMenu
                    : item.name === "Billing"
                    ? toggleGstSubMenu
                    : item.name === "Master"
                    ? toggleProductListSubMenu
                    : item.name === "Receipt"
                    ? toggleReceiptSubMenu
                    : item.name === "Leads"
                    ? toggleLeadsSubMenu
                    : item.name === "Interview"
                    ? toggleInterviewSubMenu
                    : item.name === "Customer"
                    ? toggleCustomerSubMenu
                    : null
                }
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
                <div className="dropdown-icon">
                  {isOpen && (
                    <FaChevronDown
                      style={{
                        transform:
                          (item.name === "Student Info" &&
                            showDetailsSubMenu) ||
                          (item.name === "Attendance" &&
                            showAttendanceSubMenu) ||
                          (item.name === "Receipt" && showReceiptSubMenu) ||
                          (item.name === "Billing" && showGstSubMenu) ||
                          (item.name === "Master" && showProductListSubMenu) ||
                          (item.name === "Leads" && showLeadsSubMenu) ||
                          (item.name === "Interview" && showInterviewSubMenu) ||
                          (item.name === "Customer" && showCustomerSubMenu)
                            ? "rotate(180deg)"
                            : "none",
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
            {item.subItems &&
              ((item.name === "Student Info" && showDetailsSubMenu) ||
                (item.name === "Attendance" && showAttendanceSubMenu) ||
                (item.name === "Receipt" && showReceiptSubMenu) ||
                (item.name === "Billing" && showGstSubMenu) ||
                (item.name === "Master" && showProductListSubMenu) ||
                (item.name === "Leads" && showLeadsSubMenu) ||
                (item.name === "Interview" && showInterviewSubMenu) ||
                (item.name === "Customer" && showCustomerSubMenu)) &&
              isOpen && (
                <div className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <NavLink
                      to={subItem.path}
                      key={subIndex}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon"></div>
                      <div className="link_text">{subItem.name}</div>
                    </NavLink>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
