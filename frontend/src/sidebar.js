import React, { useState } from "react";
import "./App.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dasahboard",
      icon: <FaTh />,
    },
    {
      path: "/StudentDetails",
      name: "StudentDetails",
      icon: <FaUserAlt />,
      submenu: [
        {
          path: "studentdetail",
          name: "Add student",
        },
        {
          path: "/studentlist",
          name: "Viewstudent",
        },
        // {
        //     path: "/about/contact",
        //     name: "Contact",
        // },
      ],
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink to={item.path} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
            {item.submenu && isOpen && (
              <div className="submenu">
                {item.submenu.map((subitem, subIndex) => (
                  <NavLink
                    to={subitem.path}
                    key={subIndex}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon"></div>
                    <div className="link_text">{subitem.name}</div>
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
