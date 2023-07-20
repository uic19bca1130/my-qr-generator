import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, ] = useState();

  return (
    <div>
      <ul 
        className="nav nav-pills -primary"
        id="qr-type-pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "url" ? "active" : ""}`}
            id="url"
            to="qrcode/URL"
            style={{
              textShadow: activeTab === "url" ? "0 0 3px #39ff14" : "none",
            }}
          >
            <div>URL</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${
              activeTab === "location" ? "active" : ""
            }`}
            id="url"
            to="qrcode/Google Maps URL"
            style={{
              textShadow: activeTab === "location" ? "0 0 3px #39ff14" : "none",
            }}
          >
            <div>LOCATION</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "call" ? "active" : ""}`}
            id="call"
            to="qrcode/CALL"
            style={{
              textShadow: activeTab === "call" ? "0 0 3px #39ff14" : "none",
            }}
          >
            <div>CALL</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "text" ? "active" : ""}`}
            id="text"
            to="qrcode/TEXT"
            style={{
              textShadow: activeTab === "text" ? "0 0 3px #39ff14" : "none",
            }}
          >
            <div>TEXT</div>
          </Link> 
        </li>
        <li className="nav-item" role="presentation">
        
        </li>
        
      </ul>
      
    </div>
  );
};

export default Navbar;
