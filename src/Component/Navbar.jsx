import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, ] = useState("");

  return (
    <div>
      <ul
        className="nav nav-pills -primary"
        id="qr-type-pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "url" ? "active" : ""}`}//active lab use to indicate tabs is currently active or selected
            id="url"
            to="qrcode/URL"
          >
            <div className="box3d">URL</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${
              activeTab === "location" ? "active" : ""//active class is modifier class that applies diferent style or link
            }`}
            id="url"
            to="qrcode/Google Maps URL"
          >
            <div className="box3d">LOCATION</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "call" ? "active" : ""}`}
            id="call"
            to="qrcode/CALL"
          >
            <div className="box3d">CALL</div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link ${activeTab === "text" ? "active" : ""}`}
            id="text"
            to="qrcode/TEXT"
          >
            <div className="box3d">TEXT</div>
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default Navbar;
