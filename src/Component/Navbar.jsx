// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, ] = useState("location");

  return (
    <div className="tabs colour-black">
      <ul
        className="nav nav-pills -primary"
        id="qr-type-pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "url" ? "active" : ""}`}
            id="url"
            to="qrcode/Url"
          >
            {" "}
          URL
          </Link>
       
        </li>
        <li className="nav-item" role="presentation">
        <Link
            className= {`nav-link ${activeTab === "location" ? "active" : ""}`}
            id="url"
            to="qrcode/Location"
          >
            {" "}
          LOCATION
          </Link>
 
        </li>
        <li className="nav-item" role="presentation">
        <Link
            className={`nav-link ${activeTab === "call" ? "active" : ""}`}
            id="call"
            to="qrcode/Call"
          >
            {" "}
            CALL
          </Link>
        </li>
        <li className="nav-item" role="presentation">
        <Link
            className={`nav-link ${activeTab === "text" ? "active" : ""}`}
            id="text"
            to="qrcode/text"
          >
            {" "}
            TEXT
          </Link>
      
        </li>
        <li className="nav-item" role="presentation">
          <div className="dropdown">
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            ></ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
